import { Rating } from "@mui/material";
import React from "react";
import { currFormat } from "../../utils/currency";

const OrderSummaryItem = ({ product }) => {
  const { image, price, name, qty, rating } = product;
  return (
    <div className="flex items-center justify-between w-full mb-4">
      <img
        src={image}
        className="w-16 h-16 flex-shrink-0 object-contain p-1 rounded-md overflow-hidden inline-block mr-3 border "
        alt={name}
      />
      <div className="flex items-start justify-start flex-col w-full">
        <h1 className="mr-auto text-lg font-medium ">{name}</h1>
        <Rating value={rating} readOnly />
      </div>
      <p className="font-medium text-gray-600 shrink-0">
        {qty} x {currFormat(price)}
      </p>
    </div>
  );
};

export default OrderSummaryItem;
