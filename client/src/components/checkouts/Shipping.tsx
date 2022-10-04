import {
  Alert,
  AlertTitle,
  Button,
  IconButton,
  Radio,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { saveShippingMethod } from "../../actions/cart";
import { createOrder } from "../../actions/order";
import { calcTotal } from "../../utils/cost";
import { ORDER_PAY_RESET } from "../../actions/actionTypes";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../common/CheckoutSteps";
import EditIcon from "@mui/icons-material/Edit";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppDispatch, useAppSelector } from "../../store";
import { ShippingMethod } from "../../types";
import OrderSummary from "./OrderSummaryLargScreen";

const shippingMethods: Array<ShippingMethod> = [
  {
    name: "International Shipping",
    cost: 40.0,
  },
  {
    name: "Fast Shipping",
    cost: 60.0,
  },
];

const Shipping: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { cartItems, shippingAddress } = useAppSelector((state) => state.cart);
  let [shippingMethod, setShippingMethod] = useState<ShippingMethod | null>(
    null
  );
  const { loading, order, error } = useAppSelector(
    (state) => state.orderCreate
  );
  const { userInfo } = useAppSelector((state) => state.userLogin);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  // Calculate the prices
  let totalPriceBeforeShipping = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let { discount, qty, price } = cartItems[i];
    totalPriceBeforeShipping += calcTotal(+discount, +price, +qty);
  }

  let taxPrice =
    totalPriceBeforeShipping > 100
      ? 0
      : Number((totalPriceBeforeShipping * 0.1).toFixed(2));

  const submitHandler = () => {
    if (shippingMethod === null) return;
    if (!userInfo || !userInfo._id) {
      navigate("/login");
      return;
    }

    if (!shippingAddress) {
      navigate("/checkout/");
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
        itemsPrice: Number(totalPriceBeforeShipping.toFixed(2)),
        shippingPrice: Number(shippingMethod.cost.toFixed(2)),
        taxPrice,
        totalPrice,
      })
    );

    dispatch({ type: ORDER_PAY_RESET });
  };

  const updateShippingMethod = (method: ShippingMethod) => {
    setShippingMethod(method);
    dispatch(saveShippingMethod(method));
  };

  useEffect(() => {
    if (order) {
      navigate("/checkouts/payment");
    }
  }, [order, userInfo, navigate]);

  if (shippingAddress === null) {
    navigate("/checkouts/");
    return null;
  }

  const { address, apartment, postalCode, city, country, email } =
    shippingAddress;

  return (
    <div>
      <div className="px-4 pt-4">
        <CheckoutSteps currStep={3} />
      </div>
      <div className="block md:hidden">
        <OrderSummary />
      </div>
      <div className="py-4 px-4">
        <div className="py-3">
          <div className="flex items-center justify-between border-b pb-1">
            <h1 className="text-gray-600">Contact</h1>
            <p className="text-left mr-auto ml-10">{email}</p>
            <IconButton href="/checkouts" size="small">
              <EditIcon />
            </IconButton>
          </div>
          <div className="flex items-center justify-between pt-1">
            <h1 className="text-gray-600">Ship to </h1>
            <p className="text-left mr-auto ml-10 truncate">
              {`${address}, ${apartment}, ${postalCode}, ${city}, ${country}`}
            </p>

            <IconButton href="/checkouts" size="small">
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
            href="/checkouts"
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
    </div>
  );
};

export default Shipping;
