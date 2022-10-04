import React, { useEffect, useState } from "react";
import OrderSummaryItem from "./OrderSummaryItem";
import { calcTotalPrice, calcSubTotal } from "../../utils/cost";
import { currFormat } from "../../utils/currency";
import { useAppSelector } from "../../store";
import LabelValue from "../common/LabelValue";

const OrderSummaryLargScreen: React.FC<{}> = () => {
  const { cartItems, shippingMethod } = useAppSelector((state) => state.cart);
  const [currentShppingCost, setCurrentShppingCost] = useState<number | null>(
    null
  );
  const subTotal = calcSubTotal(cartItems);

  let total = calcTotalPrice(cartItems, shippingMethod);

  useEffect(() => {
    if (shippingMethod) {
      setCurrentShppingCost(shippingMethod ? shippingMethod.cost : null);
    }
  }, [shippingMethod]);

  return (
    <div className="p-4 h-full">
      {cartItems.map((product, idx) => (
        <OrderSummaryItem key={idx} product={product} />
      ))}
      <div className="pt-4">
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
