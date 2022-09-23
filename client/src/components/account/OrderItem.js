import { Tooltip, Typography } from "@mui/material";
import React from "react";
import Item from "./Order";
import moment from "moment";

const OrderItem = ({ order, idx }) => {
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
          title={
            <Typography>
              Order ID: {_id} - Will be required if you want to contact the
              support
            </Typography>
          }
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
          <TextSlice tooltip={moment(createdAt).format("MMM Do YY")}>
            {moment(createdAt).fromNow()}
          </TextSlice>
          using {<span className="font-medium mx-1">{paymentMethod}</span>}
          with total of
          <span className="font-medium ml-1">${totalPrice.toFixed(2)}</span>
          <TextSlice
            tooltip={
              isPaid
                ? moment(paidAt).format("MMM Do YY")
                : "Please consider finishing your payment as the order will not delivered until the payment is confirmed ✅"
            }
          >
            {isPaid ? `paid ${moment(paidAt).fromNow()}` : "(not yet paid ❓️)"}
            .
          </TextSlice>
          <TextSlice
            tooltip={
              isDelivered
                ? moment(deliveredAt).format("MMM Do YY")
                : "Will be shipped after payment 🏃"
            }
          >
            {isDelivered
              ? `Shipped ${moment(deliveredAt).fromNow()} by`
              : "Will be shipped by"}
          </TextSlice>
          <span className="font-medium mr-1">
            {shippingMethod.name} (${shippingMethod.cost.toFixed(2)}).
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

const TextSlice = ({ children, tooltip }) => {
  return (
    <Tooltip
      arrow
      followCursor
      placement="top"
      title={<Typography sx={{ textAlign: "center" }}>{tooltip}</Typography>}
    >
      <span className="font-medium mx-1 border-b border-dashed border-gray-700">
        {children}
      </span>
    </Tooltip>
  );
};
