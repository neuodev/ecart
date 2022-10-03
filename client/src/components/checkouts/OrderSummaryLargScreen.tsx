import React, { useEffect, useState } from "react";
import OrderSummaryItem from "./OrderSummaryItem";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { calcSubTotal } from "../../utils/calcSubTotal";
import { currFormat } from "../../utils/currency";

const OrderSummaryLargScreen = () => {
  const { cartItems, shippingMethod } = useSelector((state) => state.cart);
  // todo: Fix this
  const [currentShppingCost, setCurrentShppingCost] = useState(null);
  const subTotal = calcSubTotal(cartItems);

  let total;
  if (shippingMethod) {
    total = calcTotalPrice(cartItems, shippingMethod);
  } else {
    total = calcTotalPrice(cartItems);
  }
  total = total.toFixed(2);

  useEffect(() => {
    if (shippingMethod) {
      setCurrentShppingCost(shippingMethod.cost.toFixed(2));
    }
  }, [shippingMethod]);

  return (
    <div className="p-4 my-4 h-full">
      {cartItems.map((product, idx) => (
        <OrderSummaryItem key={idx} product={product} />
      ))}
      <div className="py-4">
        <LabelValue label="Subtotal" value={currFormat(subTotal)} />
        <LabelValue
          label="Shipping"
          value={
            currentShppingCost !== null ? currFormat(currentShppingCost) : "-"
          }
        />
        <span className="inline-block w-full h-0.5 bg-gray-100 mb-2"></span>
        <LabelValue label="Total" value={currFormat(total)} />
      </div>
    </div>
  );
};

export default OrderSummaryLargScreen;

const LabelValue = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <h1 className="font-light">{label}</h1>
      <p className="text-lg">{value}</p>
    </div>
  );
};
