import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import { payOrder } from "../../actions/order";
import LoadSdk from "../utils/LoadSdk";
import OrderSummary from "./OrderSummary";
import CheckoutSteps from "../common/CheckoutSteps";
import EditIcon from "@mui/icons-material/Edit";
import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Modal from "../common/Modal";
import { ORDER_CREATE_RESET, ORDER_PAY_RESET } from "../../actions/actionTypes";

const BUYER_ACCOUNTS = [
  {
    email: "sb-senam5133887@personal.example.com",
    password: "IZ)&dJ8e",
  },
  {
    email: "sb-cjvpf4639472@business.example.com",
    password: "6}Zb&ks7",
  },
];

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sdkReady, setSdkReady] = useState(false);
  const { shippingAddress } = useSelector((state) => state.cart);
  const { email, address, city, postalCode, country, apartment } =
    shippingAddress;

  const { userInfo } = useSelector((state) => state.userLogin);
  const { order } = useSelector((state) => state.orderCreate);
  const { loading, error, success } = useSelector((state) => state.orderPay);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
      return;
    } else if (!order) {
      navigate("/cart/1");
      return;
    }

    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/v1/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order) {
      navigate("/cart");
      return;
    }

    if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [userInfo, order, navigate]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order._id, paymentResult));
  };

  //Todo: Double check this
  useEffect(() => {
    if (success) {
      setSdkReady(false);
    }
  }, [success]);

  let resetPayment = () => {
    dispatch({ type: ORDER_PAY_RESET });
    dispatch({ type: ORDER_CREATE_RESET });
  };

  return (
    <div>
      <div className="block md:hidden">
        <OrderSummary />
      </div>
      <div className="p-3">
        <CheckoutSteps currStep={4} />
      </div>

      <div className="rounded-md py-4 ml-3 mr-3 mt-4 mb-10">
        <div className="flex items-center justify-between mb-2 border-b pb-3 ">
          <h1 className="text-gray-600">Contact</h1>
          <p className="text-left mr-auto ml-10 text-sm">{email}</p>
          <IconButton LinkComponent={Link} to="/checkouts" size="small">
            <EditIcon />
          </IconButton>
        </div>
        <div className="flex items-center justify-between  border-b pb-3  mb-2">
          <h1 className="text-gray-600">Ship to </h1>
          <p className="text-left mr-auto ml-10 truncate text-sm">
            {`${address}, ${apartment}, ${postalCode}, ${city},${country}`}
          </p>

          <IconButton LinkComponent={Link} to="/checkouts" size="small">
            <EditIcon />
          </IconButton>
        </div>
        <div className="flex items-center justify-between  mb-2">
          <h1 className="text-gray-600">Method </h1>
          <p className="text-left mr-auto ml-10 text-sm">
            {order && order.shippingMethod.name}
          </p>
          <IconButton
            LinkComponent={Link}
            to="/checkouts/shipping/"
            size="small"
          >
            <EditIcon />
          </IconButton>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center mb-3">
          <CircularProgress />
        </div>
      ) : (
        error && (
          <div className="px-3">
            <Alert color="error">
              <AlertTitle>Error</AlertTitle>
              <Typography>
                {error || "Unexpected error, please retry"}
              </Typography>
            </Alert>
          </div>
        )
      )}
      <div className="py-5 mx-3 mt-4 mb-10">
        <Tooltip
          placement="top"
          arrow
          title={
            <div>
              <Typography mb="16px">
                For testing purposes you can use one of these buyers accounts
              </Typography>
              <ul>
                {BUYER_ACCOUNTS.map((acc) => (
                  <li className="mb-2" key={acc.password}>
                    <p>
                      <span>Email: </span>
                      <span>{acc.email}</span>
                    </p>
                    <p>
                      <span>Password: </span>
                      <span>{acc.password}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          }
        >
          <div>
            {sdkReady || !success ? (
              <PayPalButton
                amount={order && Number(order.totalPrice).toFixed(2)}
                onSuccess={successPaymentHandler}
                currency="USD"
              />
            ) : (
              !success && <LoadSdk />
            )}
          </div>
        </Tooltip>
      </div>
      <Modal
        open={success}
        onClose={() => {
          resetPayment();
          navigate("/");
        }}
      >
        <div>
          <img src="/images/shopping.gif" alt="Order completed" title="Order" />
          <Typography fontFamily="Rubik" variant="h6" textAlign="center">
            You made it. Your order will reach you soon!
          </Typography>

          <div className="grid grid-cols-2 gap-5 mt-5">
            <Button
              onClick={() => {
                resetPayment();
                navigate("/");
              }}
              variant="outlined"
              color="error"
            >
              Close
            </Button>
            <Button
              onClick={() => {
                resetPayment();
                navigate("/account/");
              }}
              variant="dark"
            >
              Track your order
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Payment;
