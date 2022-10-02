import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ORDER_CREATE_RESET, ORDER_PAY_RESET } from "../../actions/actionTypes";
import { payOrder } from "../../actions/order";
import { RootState, useAppDispatch } from "../../store";
import { IPaymentResult } from "../../types";
import LoadSdk from "../utils/LoadSdk";
import Modal from "./Modal";

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

const PayPal: React.FC<{
  orderId: string;
  totalPrice: number;
  resetOrder?: () => void;
}> = ({ orderId, totalPrice, resetOrder }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, success } = useSelector<
    RootState,
    RootState["orderPay"]
  >((state) => state.orderPay);
  const [sdkReady, setSdkReady] = useState<boolean>(false);

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

  useEffect(() => {
    if (!window.paypal) {
      addPaypalScript();
    } else {
      setSdkReady(true);
    }
  }, [orderId]);

  const successPaymentHandler = (paymentResult: IPaymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  };

  let resetPayment = () => {
    dispatch({ type: ORDER_PAY_RESET });
    dispatch({ type: ORDER_CREATE_RESET });
    if (resetOrder) resetOrder();
  };

  const goHome = () => {
    resetPayment();
    navigate("/");
  };

  return (
    <div>
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
                amount={Number(totalPrice).toFixed(2)}
                onSuccess={successPaymentHandler}
                currency="USD"
              />
            ) : (
              !success && <LoadSdk />
            )}
          </div>
        </Tooltip>
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

      <Modal open={success} onClose={goHome}>
        <div>
          <img src="/images/shopping.gif" alt="Order completed" title="Order" />
          <Typography fontFamily="Rubik" variant="h6" textAlign="center">
            You made it. Your order will reach you soon!
          </Typography>

          <div className="grid grid-cols-2 gap-5 mt-5">
            <Button onClick={goHome} variant="outlined" color="error">
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

export default PayPal;
