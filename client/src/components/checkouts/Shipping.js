import {
  Alert,
  AlertTitle,
  Button,
  IconButton,
  Radio,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingMethod } from "../../actions/cart";
import { createOrder } from "../../actions/order";
import { calcTotal } from "../../utils/cost";
import OrderSummary from "./OrderSummary";
import { ORDER_PAY_RESET } from "../../actions/actionTypes";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../common/CheckoutSteps";
import EditIcon from "@mui/icons-material/Edit";
import CircularProgress from "@mui/material/CircularProgress";

const shippingMethods = [
  {
    name: "International Shipping",
    cost: 40.0,
  },
  {
    name: "Fast Shipping",
    cost: 60.0,
  },
];

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alert, setAlert] = useState("");
  const { cartItems, shippingAddress } = useSelector((state) => state.cart);

  let [shippingMethod, setShippingMethod] = useState(null);
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

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

  const { loading, order, error } = useSelector((state) => state.orderCreate);

  const submitHandler = () => {
    if (!userInfo || !userInfo._id) {
      navigate("/login");
      return;
    }

    let totalPrice =
      Number(taxPrice) +
      Number(totalPriceBeforeShipping) +
      Number(shippingMethod.cost);

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
  };

  const updateShippingMethod = (method) => {
    setShippingMethod(method);
    dispatch(saveShippingMethod(method));
  };

  useEffect(() => {
    if (order) {
      navigate("/checkouts/payment");
    }
  }, [order, userInfo, navigate]);

  return (
    <div className="py-4 px-4">
      <div className="block md:hidden">
        <OrderSummary />
      </div>
      <CheckoutSteps currStep={3} />
      <div className="py-3 mt-4">
        <div className="flex items-center justify-between border-b pb-1">
          <h1 className="text-gray-600">Contact</h1>
          <p className="text-left mr-auto ml-10">{email}</p>
          <IconButton LinkComponent={Link} to="/checkouts" size="small">
            <EditIcon />
          </IconButton>
        </div>
        <div className="flex items-center justify-between pt-1">
          <h1 className="text-gray-600">Ship to </h1>
          <p className="text-left mr-auto ml-10 truncate">
            {`${address}, ${apartment}, ${postalCode}, ${city}, ${country}`}
          </p>

          <IconButton LinkComponent={Link} to="/checkouts" size="small">
            <EditIcon />
          </IconButton>
        </div>
      </div>
      <div className="py-4 mr-4 mb-10">
        <h1 className="text-lg text-gray-700 mb-2">Shipping method</h1>
        {shippingMethods.map((method, idx) => (
          <div
            key={idx}
            onClick={() => updateShippingMethod(method)}
            className="flex items-center justify-between cursor-pointer px-2"
          >
            <Radio
              color="default"
              checked={
                shippingMethod !== null && shippingMethod.name === method.name
                  ? true
                  : false
              }
            />
            <p className="mr-auto font-medium "> {method.name}</p>
            <p className="font-semibold ">${method.cost.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="mr-4">
        <Button
          onClick={submitHandler}
          disabled={shippingMethod === null || loading === true}
          variant="dark"
          fullWidth
          sx={{ mb: "16px" }}
        >
          {loading ? (
            <CircularProgress size={20} sx={{ color: "#ffffff" }} />
          ) : !userInfo || !userInfo._id ? (
            "Login first"
          ) : (
            "Compelete Order & payment"
          )}
        </Button>
        <Button
          variant="dark-outlined"
          fullWidth
          sx={{ "& input": { padding: "12px 20px" } }}
          size="small"
          LinkComponent={Link}
          to="/checkouts"
        >
          Back to shpping information
        </Button>
      </div>
      <div className="mr-4 mt-4">
        {error && (
          <Alert color="error">
            <AlertTitle>Error</AlertTitle>
            <Typography>{error}</Typography>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Shipping;
