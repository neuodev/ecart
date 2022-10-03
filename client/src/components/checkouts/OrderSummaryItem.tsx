import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ICartItem } from "../../types";
import { currFormat } from "../../utils/currency";

const OrderSummaryItem: React.FC<{ product: ICartItem }> = ({ product }) => {
  const { image, price, name, qty, rating, product: id } = product;
  return (
    <div className="flex items-center justify-between w-full mb-4">
      <Link className="flex-shrink-0" to={`/product/${id}`}>
        <img
          src={image}
          className="w-16 h-16 object-contain p-1 rounded-md overflow-hidden inline-block mr-3 border "
          alt={name}
        />
      </Link>
      <div className="flex items-start justify-start flex-col w-full">
        <Link className="flex-shrink-0" to={`/product/${id}`}>
          <h1 className="mr-auto text-lg font-medium ">{name}</h1>
        </Link>
        <Rating value={rating} readOnly />
      </div>
      <p className="font-medium text-gray-600 shrink-0">
        {qty} x {currFormat(price)}
      </p>
    </div>
  );
};

export default OrderSummaryItem;
