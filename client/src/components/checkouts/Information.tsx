import React, { useEffect } from "react";
import ShippingForm from "./ShippingForm";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store";
import OrderSummary from "./OrderSummaryLargScreen";
import CheckoutSteps from "../common/CheckoutSteps";
import { ROUTES } from "../../constants/routes";

const Information: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { cartItems } = useAppSelector((state) => state.cart);

  useEffect(() => {
    // Redirect if the cart is empty
    if (cartItems.length === 0) {
      navigate(ROUTES.ROOT);
    }
  }, [cartItems, navigate]);
  return (
    <div className="container mx-auto">
      <div className="p-4">
        <CheckoutSteps currStep={2} />
      </div>

      <div className="block md:hidden">
        <OrderSummary />
      </div>
      <ShippingForm />
    </div>
  );
};

export default Information;
