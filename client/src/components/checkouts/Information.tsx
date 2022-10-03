import React, { useEffect } from "react";
import OrderSummary from "./OrderSummary";
import ShippingForm from "./ShippingForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    // Redirect if the cart is empty
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);
  return (
    <div className="container mx-auto">
      <div className="block md:hidden">
        <OrderSummary />
      </div>
      <ShippingForm />
    </div>
  );
};

export default Information;
