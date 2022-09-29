import React from "react";
import OrderSummaryLargScreen from "../components/checkouts/OrderSummaryLargScreen";
import { Outlet } from "react-router-dom";

const checkouts = ({ history }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <Outlet />
        </div>
        <div className="hidden md:block md:col-span-6 h-screen">
          <OrderSummaryLargScreen />
        </div>
      </div>
    </div>
  );
};

export default checkouts;
