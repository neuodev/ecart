import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Item from "./Order";
import moment from "moment";

const OrderItem = ({ order, idx }) => {
  const [toggleId, setToggleId] = useState(false);
  const {
    totalPrice,
    isPaid,
    isDelivered,
    orderItems,
    createdAt,
    paidAt,
    deliveredAt,
    paymentMethod,
    shippingMethod,
    _id,
  } = order;

  return (
    <div className=" bg-gray-100 shadow-lg  mb-4 border rounded-lg col-span-12 md:col-span-6 lg:col-span-4">
      <div className="bg-gray-200 w-full py-4 px-4 rounded-t-md">
        <Tooltip
          arrow
          placement="top"
          title={<Typography>Order Id: {_id}</Typography>}
        >
          <div className="flex items-center justify-start space-x-2">
            <h1 className="text-base uppercase tracking-wider font-extrabold text-gray-700">
              #{idx + 1}
            </h1>
          </div>
        </Tooltip>
      </div>
      <div className="flex flex-col my-3 pb-4 px-4 rounded-md">
        <p className="leading-relaxed">
          You made an order
          <Tooltip
            arrow
            followCursor
            placement="top"
            title={
              <Typography>{moment(createdAt).format("MMM Do YY")}</Typography>
            }
          >
            <span className="font-medium mx-1">
              {moment(createdAt).fromNow()}
            </span>
          </Tooltip>
          using {<span className="font-medium mx-1">{paymentMethod}</span>}
          with total of
          <span className="font-medium ml-1">${totalPrice.toFixed(2)}</span>
          <Tooltip
            arrow
            followCursor
            placement="top"
            title={
              <Typography>
                {isPaid
                  ? moment(paidAt).format("MMM Do YY")
                  : "Please consider finishing your payment as the order with not delivered until the payment is confirmed"}
              </Typography>
            }
          >
            <span className="font-medium mx-1">
              {isPaid ? `paid ${moment(paidAt).fromNow()}` : "(not yet paid)"}.
            </span>
          </Tooltip>
          Will be shipped by
          <span className="font-medium mx-1">
            {shippingMethod.name}(${shippingMethod.cost.toFixed(2)}).
          </span>
        </p>

        <div className="mt-4">
          {orderItems.map((order, idx) => (
            <Item order={order} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
