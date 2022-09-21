import React, { useEffect, useState } from "react";
import OrderSummaryItem from "./OrderSummaryItem";
import { useSelector, useDispatch } from "react-redux";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { calcSubTotal } from "../../utils/calcSubTotal";

const OrderSummaryLargScreen = () => {
  const { cartItems, shippingMethod } = useSelector((state) => state.cart);
  const [currentShppingCost, setCurrentShppingCost] = useState("--,--");
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
    <div className="py-4 rounded-md px-4 mt-4 shadow-sm">
      {cartItems.map((product, idx) => (
        <OrderSummaryItem key={idx} product={product} />
      ))}
      <div className="border-b"></div>
      <div className="py-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="font-light ">Subtotal</h1>
          <p className="text-lg">${subTotal.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="font-light">Shipping</h1>
          <p className="text-lg">${currentShppingCost}</p>
        </div>
      </div>
      <div className="border-b-2 border-gray-700 "></div>
      <div className="flex items-center justify-between py-4">
        <h1 className="font-light text-lg">Total</h1>
        <p>
          <span className="text-sm font-light">USD</span>
          <span className="font-medium text-xl ml-1">${total}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryLargScreen;
