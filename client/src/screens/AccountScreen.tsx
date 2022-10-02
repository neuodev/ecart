import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import MainNavbar from "../components/HomeScreen/MainNavbar";
import { useNavigate, Outlet } from "react-router-dom";
import { RootState } from "../store";

const AccountScreen = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector<RootState["userLogin"]>(
    (state) => state.userLogin
  );

  useEffect(() => {
    if (!userInfo || !userInfo._id) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center space-x-2 mb-2 mt-5 text-sm pl-0.5">
        <Link to="/">Home</Link>
        <BsChevronCompactRight />
        <Link to="/account" className="text-green-400">
          Account
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountScreen;
