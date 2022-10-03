import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiCart, BiChevronDown } from "react-icons/bi";
import OrderSummaryItem from "./OrderSummaryItem";
import { useSelector } from "react-redux";
import { calcTotalPrice, calcSubTotal } from "../../utils/cost";
import { useAppSelector } from "../../store";
import { currFormat } from "../../utils/currency";

const OrderSummary = () => {
  const { cartItems, shippingMethod } = useAppSelector((state) => state.cart);
  const [currentShppingCost, setCurrentShppingCost] = useState<number | null>(
    null
  );
  let subTotal = calcSubTotal(cartItems);
  let total = calcTotalPrice(cartItems, shippingMethod);

  useEffect(() => {
    if (shippingMethod) {
      setCurrentShppingCost(shippingMethod ? shippingMethod.cost : null);
    }
  }, [shippingMethod]);

  return (
    <Accordion square>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <div className="flex items-center justify-between w-full container mx-auto px-4">
          <div className="flex items-center  text-green-400 font-medium ">
            <BiCart className="mr-1 text-xl" />
            <p>Show order Summary</p>
            <BiChevronDown className="text-xl mt-1 " />
          </div>
          <p className="font-bold text-gray-800 ">{currFormat(total)}</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="w-full container mx-auto px-4">
          {cartItems.map((product, idx) => (
            <OrderSummaryItem key={idx} product={product} />
          ))}

          <div className="border-b "></div>
          <div className="py-4">
            <div className="flex items-center justify-between mb-2">
              <h1 className="font-light ">Subtotal</h1>
              <p className="text-lg">{currFormat(subTotal)}</p>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="font-light">Shipping</h1>
              <p className="text-lg">
                {currentShppingCost ? currFormat(currentShppingCost) : "-"}
              </p>
            </div>
          </div>
          <div className="border-b"></div>
          <div className="flex items-center justify-between py-4">
            <h1 className="font-light text-lg">Total</h1>
            <p>
              <span className="text-sm font-light">USD</span>
              <span className="font-medium text-xl ml-1">${total}</span>
            </p>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default OrderSummary;
