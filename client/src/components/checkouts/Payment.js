import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import { payOrder } from "../../actions/order";
import LoadSdk from "../../utils/LoadSdk";
import OrderSummary from "./OrderSummary";
import Loader from "../../utils/Loader";
import Alert from "../../utils/Alert";
import CheckoutSteps from "../common/CheckoutSteps";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

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

  useEffect(() => {
    if (success) {
      setSdkReady(false);
    }
  }, [success]);

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
          <Loader />
        </div>
      ) : error ? (
        <div className="px-3">
          <Alert message={error} type="error" />
        </div>
      ) : (
        success && (
          <div className="px-3">
            <Alert message="PAYMENT COMPELETED" type="success">
              <Link to="/account/orders">
                <p className="px-3 py-2 text-green-800 font-medium uppercase tracking-wider  text-sm bg-green-300 inline-block rounded-full  mt-3  ">
                  Visit The Order
                </p>
              </Link>
            </Alert>
          </div>
        )
      )}
      <div className=" py-5  mx-3 mt-4 mb-10">
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
    </div>
  );
};

export default Payment;
