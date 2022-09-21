import Payment from "../components/checkouts/Payment";
import React from "react";
import { Route, Router } from "react-router-dom";
import Information from "../components/checkouts/Information";
import OrderSummaryLargScreen from "../components/checkouts/OrderSummaryLargScreen";
import Shipping from "../components/checkouts/Shipping";
import MainNavbar from "../components/HomeScreen/MainNavbar";
import { Outlet } from "react-router-dom";

const checkouts = ({ history }) => {
  return (
    <>
      <div className="">
        <MainNavbar history={history} />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <Outlet />
          </div>
          <div
            className="hidden md:block md:col-span-6 h-screen "
            style={{ backgroundColor: "#FAFAFA" }}
          >
            <OrderSummaryLargScreen />
          </div>
        </div>
      </div>
    </>
  );
};

export default checkouts;
