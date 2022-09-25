import React from "react";
import { BiUser } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { FavoriteBorder } from "@mui/icons-material";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import WishList from "../wishlist/WishList";
import Search from "./Search";

const MainNavbar = () => {
  return (
    <div className=" bg-gray-50  ">
      <div className="flex items-center justify-between px-5  container mx-auto">
        <div className="block cursor-pointer ">
          <Sidebar />
        </div>
        <div className="mr-auto flex items-center space-x-1 py-5">
          <Link
            to="/"
            className="font-bold text-3xl text-gray-700 tracking-wider font-sans border-b-2 border-gray-600"
          >
            Wallet
          </Link>
        </div>
        <div className="hidden md:block mr-auto  ">
          <Search />
        </div>

        <div className="flex items-center justify-between space-x-3 text-gray-700">
          <Link to="/account">
            <BiUser
              style={{ fontSize: "30px" }}
              className="hover:text-gray-500"
            />
          </Link>
          <WishList>
            <FavoriteBorder
              style={{ fontSize: "28px" }}
              className="hover:text-gray-500 focus:outline-none"
            />
          </WishList>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
