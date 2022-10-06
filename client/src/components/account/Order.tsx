import React from "react";
import { IOrderItem } from "../../types";

const Order: React.FC<{
  order: IOrderItem;
}> = ({ order }) => {
  const { qty, name, image, price } = order;
  return (
    <div className="flex items-center space-x-3 border rounded-md mb-1 bg-white">
      <img
        className="inline-block rounded-md overflow-hidden w-16 h-16 object-contain p-1 flex-shrink-0"
        src={image}
        alt={name}
      />
      <div className="flex flex-col space-y-1 w-full md:w-48">
        <h1 className="font-medium text-gray-800 w-full truncate">{name}</h1>
        <p className="font-light text-sm">
          {qty} x ${price}
        </p>
      </div>
    </div>
  );
};

export default Order;
