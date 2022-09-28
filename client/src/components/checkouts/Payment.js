import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";
import CheckoutSteps from "../common/CheckoutSteps";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import PayPal from "../common/PayPal";

const Payment = () => {
  const navigate = useNavigate();
  const { shippingAddress } = useSelector((state) => state.cart);
  const { email, address, city, postalCode, country, apartment } =
    shippingAddress;
  const { userInfo } = useSelector((state) => state.userLogin);
  const { order } = useSelector((state) => state.orderCreate);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else if (!order) {
      navigate("/cart/1");
    }
  }, [userInfo, order, navigate]);

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
      {order && <PayPal orderId={order._id} totalPrice={order.totalPrice} />}
    </div>
  );
};

export default Payment;
