import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import CheckoutSteps from "../common/CheckoutSteps";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import PayPal from "../common/PayPal";
import { useAppSelector } from "../../store";
import { ROUTES } from "../../constants/routes";

const Payment: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { shippingAddress } = useAppSelector((state) => state.cart);
  const { userInfo } = useAppSelector((state) => state.userLogin);
  const { order } = useAppSelector((state) => state.orderCreate);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else if (!order) {
      navigate("/cart/1");
    }
  }, [userInfo, order, navigate]);

  if (shippingAddress === null) {
    navigate(ROUTES.CHECKOUTS.INFO);
    return null;
  }

  const { email, address, city, postalCode, country, apartment } =
    shippingAddress;

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
          <IconButton href="/checkouts" size="small">
            <EditIcon />
          </IconButton>
        </div>
        <div className="flex items-center justify-between  border-b pb-3  mb-2">
          <h1 className="text-gray-600">Ship to </h1>
          <p className="text-left mr-auto ml-10 truncate text-sm">
            {`${address}, ${apartment}, ${postalCode}, ${city},${country}`}
          </p>

          <IconButton href="/checkouts" size="small">
            <EditIcon />
          </IconButton>
        </div>
        <div className="flex items-center justify-between  mb-2">
          <h1 className="text-gray-600">Method </h1>
          <p className="text-left mr-auto ml-10 text-sm">
            {order && order.shippingMethod.name}
          </p>
          <IconButton href="/checkouts/shipping/" size="small">
            <EditIcon />
          </IconButton>
        </div>
      </div>
      {order && <PayPal orderId={order._id} totalPrice={order.totalPrice} />}
    </div>
  );
};

export default Payment;
