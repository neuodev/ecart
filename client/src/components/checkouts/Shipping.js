import { Radio } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingMethod } from "../../actions/cart";
import { createOrder } from "../../actions/order";
import { calcTotal } from "../../utils/cost";
import OrderSummary from "./OrderSummary";
import { ORDER_PAY_RESET } from "../../actions/actionTypes";
import { useNavigate } from "react-router-dom";

const shippingMethods = [
  {
    name: "International Shipping",
    cost: 20.0,
  },
  {
    name: "Fast Shipping",
    cost: 30.0,
  },
];

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alert, setAlert] = useState("");
  const { cartItems, shippingAddress } = useSelector((state) => state.cart);

  let [shippingMethod, setShippingMethod] = useState({});
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems]);

  const { email, address, city, postalCode, country, apartment } =
    shippingAddress;

  // Calculate the prices
  let totalPriceBeforeShipping = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let { discount, qty, price } = cartItems[i];
    totalPriceBeforeShipping += calcTotal(+discount, +price, +qty);
  }

  let taxPrice =
    totalPriceBeforeShipping > 100
      ? 0
      : (totalPriceBeforeShipping * 0.1).toFixed(2);
  let totalPrice =
    Number(taxPrice) +
    Number(totalPriceBeforeShipping) +
    Number(shippingMethod.cost);

  // get the order
  const { loading, order, error } = useSelector((state) => state.orderCreate);
  const submitHandler = () => {
    if (shippingMethod && shippingMethod.cost) {
      dispatch(
        createOrder({
          orderItems: cartItems,
          shippingAddress: shippingAddress,
          shippingMethod,
          itemsPrice: Number(totalPriceBeforeShipping).toFixed(2),
          shippingPrice: Number(shippingMethod.cost).toFixed(2),
          taxPrice,
          totalPrice,
        })
      );

      dispatch({ type: ORDER_PAY_RESET });
    } else {
      setAlert("Please select the shipping method");
    }
  };
  const updateShippingMethod = (method) => {
    setShippingMethod(method);
    dispatch(saveShippingMethod(method));
  };

  useEffect(() => {
    if (order) {
      navigate("/checkouts/payment");
    }
    if (!userInfo) {
      navigate("/login");
    }
  }, [order, userInfo]);

  return (
    <div className="py-4 px-4">
      <div className="block md:hidden">
        <OrderSummary />
      </div>
      <div className="flex items-center text-lg  space-x-2 mb-10 mt-5">
        <Link to="/cart/123">Cart</Link>
        <BsChevronCompactRight />
        <Link to="/checkouts">Information</Link>
        <BsChevronCompactRight />
        <Link
          to="/checkouts/shipping"
          className="text-green-500 font-sans font-medium"
        >
          Shipping
        </Link>
        <BsChevronCompactRight />
        <Link to="/checkouts/payment">Payment</Link>
      </div>
      <div className="border  rounded-md  p-4 mr-3 mt-4 mb-10">
        <div className="flex items-center justify-between  mb-2 border-b pb-3 ">
          <h1 className="text-gray-600">Contact</h1>
          <p className="text-left mr-auto ml-10">{email}</p>
          <Link
            to="/checkouts"
            className="text-green-400 hover:border-green-400 border-b border-transparent"
          >
            Change
          </Link>
        </div>
        <div className="flex items-center justify-between  mb-2">
          <h1 className="text-gray-600">Ship to </h1>
          <p className="text-left mr-auto ml-10 truncate">
            {`${address}, ${apartment}, ${postalCode}, ${city}, ${country}`}
          </p>
          <Link
            to="/checkouts"
            className="text-green-400 hover:border-green-400 border-b border-transparent"
          >
            Change
          </Link>
        </div>
      </div>
      <div className="py-4  mr-4 mb-10">
        {alert && (
          <div className="bg-blue-100 py-4 px-2 mb-4 rounded-md text-blue-700 font-semibold">
            <p>{alert}</p>
          </div>
        )}
        <h1 className="text-lg  text-gray-700 mb-2 px-2">Shipping method</h1>
        {shippingMethods.map((method, idx) => (
          <div
            key={idx}
            onClick={() => updateShippingMethod(method)}
            className="flex items-center justify-between cursor-pointer px-4"
          >
            <Radio
              color="default"
              checked={shippingMethod.name === method.name ? true : false}
            />
            <p className="mr-auto font-medium "> {method.name}</p>
            <p className="font-semibold ">${method.cost.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="mr-4">
        {loading ? (
          " "
        ) : (
          <button
            onClick={submitHandler}
            to="/checkouts/payment"
            className="block w-full bg-green-400 rounded-sm shadow-md  text-center  py-3 px-4  text-white font-semibold  hover:bg-green-300 transition-colors duration-300 focus:ring-1 focus:ring-green-500  mb-4 focus:outline-none "
          >
            Compelete Order & payment
          </button>
        )}
        <Link
          to="/checkouts"
          className=" flex items-center justify-center w-full border rounded-sm shadow-md  text-center  py-3 px-4  text-green-500 font-semibold   focus:ring-1 focus:ring-green-500 mb-4 "
        >
          <BsChevronCompactLeft />
          Back to Information
        </Link>
      </div>
    </div>
  );
};

export default Shipping;
