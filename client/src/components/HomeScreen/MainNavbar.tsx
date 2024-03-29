import React from "react";
import { BiUser } from "react-icons/bi";
import Sidebar from "./Sidebar";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import WishList from "../wishlist/WishList";
import Search from "./Search";
import { IconButton } from "@mui/material";
import { ROUTES } from "../../constants/routes";

const MainNavbar: React.FC<{}> = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex items-center justify-between px-5 container mx-auto">
        <div className="-ml-2.5">
          <Sidebar />
        </div>
        <div className="mr-auto flex items-center space-x-1 py-5 ml-2">
          <Link
            to="/"
            className="font-bold text-3xl text-gray-700 tracking-wider font-sans border-b-2 border-gray-600"
          >
            Wallet
          </Link>
        </div>
        <div className="hidden md:block mr-auto">
          <Search />
        </div>
        <div className="flex items-center justify-between text-gray-700 -mr-2">
          <IconButton href={ROUTES.ACCOUNT.ROOT}>
            <BiUser />
          </IconButton>
          <WishList />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
