import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummaryLargScreen";
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

  const info = [
    {
      label: "Contact",
      value: email,
    },
    {
      label: "Ship to",
      value: `${address}, ${apartment}, ${postalCode}, ${city},${country}.`,
    },
    {
      label: "Method",
      value: order ? order.shippingMethod.name : "??",
    },
  ];

  return (
    <div>
      <div className="px-4 pt-4">
        <CheckoutSteps currStep={4} />
      </div>
      <div className="block md:hidden">
        <OrderSummary />
      </div>

      <div className="rounded-md pb-4 px-4 md:mx-3 mb-10">
        {info.map(({ label, value }) => (
          <div className="flex items-center justify-between mb-2 border-b pb-3">
            <h1 className="text-gray-600 w-20 flex-shrink-0">{label}</h1>
            <p className="text-left mr-auto text-sm">{value}</p>
          </div>
        ))}
      </div>
      {order && <PayPal orderId={order._id} totalPrice={order.totalPrice} />}
    </div>
  );
};

export default Payment;
