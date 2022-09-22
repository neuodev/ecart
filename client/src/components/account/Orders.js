import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listMyOrders } from "../../actions/order";
import { Link } from "react-router-dom";
import Alert from "../../utils/Alert";
import Loader from "../../utils/Loader";
import OrderItem from "./OrderItem";
const Orders = () => {
  const { loading, error, orders } = useSelector((state) => state.myOrderList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMyOrders());
  }, []);
  return (
    <div>
      <h1 className="py-4 px-5 mb-6 bg-gray-100 rounded-md mt-4 text-lg text-gray-700 font-medium shadow-lg">
        Orders {orders && `(${orders.length})`}
      </h1>
      {loading ? (
        <div className="flex flex-col items-center justify-center my-10 h-100">
          <Loader />
          <p className="mt-12 font-medium">Getting your orders...</p>
        </div>
      ) : error ? (
        <div className="my-10">
          <Alert type="error" message={error} />
        </div>
      ) : orders.length === 0 ? (
        <div className="my-10">
          <Alert message="No Orders">
            <Link
              to="/products"
              className="inline-block bg-blue-400 text-blue-900 font-medium  px-3 py-2 my-2 rounded-full shadow-lg  uppercase tracking-wider text-sm"
            >
              Go Shopping
            </Link>
          </Alert>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-12 mb-32">
          {orders.map((order, idx) => (
            <OrderItem order={order} idx={idx} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
