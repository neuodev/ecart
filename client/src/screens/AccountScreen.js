import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import MainNavbar from "../components/HomeScreen/MainNavbar";
import { useNavigate, Outlet } from "react-router-dom";

const AccountScreen = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);
  const wishlist = useSelector((state) => state.wishlist);

  const routes = [
    {
      title: "Orders",
      path: "/account/orders",
    },
    {
      title: `Wish List (${wishlist.length})`,
      path: "/account/wishlist",
    },
  ];

  useEffect(() => {
    if (!userInfo || !userInfo._id) {
      navigate("/login");
    }
  }, [userInfo]);

  const [activeRoute, setActiveRoute] = useState("/account/orders");

  return (
    <>
      <MainNavbar />
      <div className="container mx-auto px-4">
        <div className=""></div>
        <div className="flex items-center space-x-2 mb-2 mt-5 text-sm">
          <Link to="/">Home</Link>
          <BsChevronCompactRight />
          <Link to="/account" className="text-green-400">
            Account
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          {routes.map((route) => (
            <button
              className={`${
                activeRoute === route.path ? "border-b border-gray-600 " : ""
              } border-b border-transparent focus:outline-none text-xs sm:text-sm font-medium text-gray-800 mb-1`}
              onClick={() => setActiveRoute(route.path)}
            >
              {route.title}
            </button>
          ))}
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AccountScreen;
