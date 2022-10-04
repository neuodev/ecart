import React, { useEffect, useState } from "react";
import { listMyOrders } from "../../actions/order";
import OrderItem from "./OrderItem";
import Modal from "../common/Modal";
import { Typography, Alert } from "@mui/material";
import PayPal from "../common/PayPal";
import { useAppDispatch, useAppSelector } from "../../store";
import { IOrder } from "../../types";
import OrdersSkeleton from "./OrdersSkeleton";
import ErrorScreen from "../ProductScreen/ErrorScreen";
import EmptyOrder from "./EmptyOrder";

const Orders: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.userLogin);
  const { loading, error, orders } = useAppSelector(
    (state) => state.myOrderList
  );
  const { success } = useAppSelector((state) => state.orderPay);
  const [order, setOrder] = useState<IOrder | null>(null);

  useEffect(() => {
    if (userInfo) dispatch(listMyOrders());
  }, [success, userInfo, dispatch]);

  return (
    <div>
      <h1 className="py-4 px-5 mb-6 bg-gray-100 rounded-md mt-4 text-lg text-gray-700 font-medium shadow-lg">
        Orders {orders.length !== 0 && `(${orders.length})`}
      </h1>
      {loading ? (
        <OrdersSkeleton />
      ) : error ? (
        <div className="my-10 min-h-500">
          <ErrorScreen />
        </div>
      ) : orders.length === 0 ? (
        <div className="py-32 min-h-400">
          <EmptyOrder />
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-12 mb-32">
          {orders.map((order, idx) => (
            <OrderItem order={order} idx={idx} key={idx} payOrder={setOrder} />
          ))}
        </div>
      )}

      {order !== null && (
        <Modal open onClose={() => setOrder(null)}>
          <Typography variant="h4" textAlign="center">
            Pay your order
          </Typography>

          <PayPal
            orderId={order._id}
            totalPrice={order.totalPrice}
            resetOrder={() => setOrder(null)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Orders;
