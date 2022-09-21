import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cart";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";

const CartItems = ({ cartItem }) => {
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { name, price, qty, discount, image, product } = cartItem;
  const priceAfterDiscount = price - price * (discount / 100);
  const totalPrice = priceAfterDiscount * qty;
  let [showSelect, setShowSelect] = useState(false);
  let [quantity, setQuantity] = useState(qty);
  const dispatch = useDispatch();
  const updateQty = (qty) => {
    setQuantity(qty);
    setShowSelect(false);
    dispatch(addToCart(product, qty));
  };
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div className="flex flex-row  items-center lg:justify-between relative">
      <div className="flex-none">
        <button
          className="absolute top-2 left-2  lg:top-0.5 lg:left-0.5 border rounded-full text-gray-800 shadow-md hover:shadow-sm cursor-pointer focus:outline-none "
          onClick={removeItemFromCart}
        >
          <Close />
        </button>
        <Link to={`/product/${product}`}>
          <img
            className="w-32 h-32 lg:h-20  xl:block  lg:w-20 block overflow-hidden rounded-md mr-4 flex-grow "
            src={image}
            alt={name}
          />
        </Link>
      </div>
      <div className="flex flex-col lg:items-center lg:flex-row  lg:space-x-10 items-start justify-between flex-grow-0 w-full ">
        <div className="truncate text-left w-full">
          <Link to={`/product/${product}`} className=" ">
            <h1 className="lg:ml-2 font-medium  mb-1 lg:text-lg   lg:w-60   flex-grow ">
              {name}
            </h1>
          </Link>
        </div>
        <p className="font-extrabold text-gray-700 block lg:hidden  lg:text-sm  overflow-hidden">
          ${priceAfterDiscount.toFixed(2)}
          <span className="ml-2 font-light text-sm  line-through ">
            {price.toFixed(2)}
          </span>
        </p>
        <div className="flex items-center  space-x-4 my-1">
          <div
            onMouseEnter={() => setShowSelect(true)}
            onMouseLeave={() => setShowSelect(false)}
            className="relative w-20"
          >
            <p className="border h-12 flex items-center justify-center rounded-md text-lg font-bold">
              <span className="text-gray-200 text-sm uppercase mr-1">Qty:</span>{" "}
              {quantity}
            </p>
            <ul
              className={`${
                showSelect ? "block" : "hidden"
              } border w-20 text-center py-4  rounded-sm absolute top-10 left-0 z-50 h-32 overflow-y-scroll bg-white  `}
            >
              {quantities.map((qty, idx) => (
                <li
                  onClick={() => updateQty(qty)}
                  className="py-1 hover:bg-gray-100 cursor-pointer rounded-md"
                  key={idx}
                >
                  {" "}
                  {qty}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="font-extrabold  text-xl">
          ${totalPrice.toFixed(2)}
          <span className="uppercase text-xs text-gray-500 font-light ml-1">
            Total
          </span>
        </p>
      </div>
    </div>
  );
};

export default CartItems;
