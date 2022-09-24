import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/user";
import { Tooltip, Typography } from "@mui/material";

const links = [
  {
    title: " My Account",
    link: "/account",
    tooltip: "See your latest orders",
  },
  {
    title: "Contact Us",
    link: "/",
    tooltip: "Contact as at support@wallet.io",
  },
  {
    title: " Wishlist",
    link: "/account/wishlist",
    tooltip: "Check your wishlist",
  },
  {
    title: "Log In",
    link: "/login",
    tooltip: "Login to your account so you can buy our products",
  },
];

const MiniNav = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="bg-gray-100">
      <div className="flex flex-row container mx-auto w-full  justify-between items-center px-5 py-1 bg-gray-100">
        <ul className="flex flex-row text-sm container mx-auto  space-x-4 font-medium items-center ">
          {links.map((link, idx) => {
            return (
              <Tooltip
                key={idx}
                arrow
                followCursor
                title={
                  <Typography sx={{ textAlign: "center" }} variant="caption">
                    {link.tooltip}
                  </Typography>
                }
              >
                <li key={idx}>
                  {userInfo && userInfo._id && link.link === "/login" ? (
                    <button
                      onClick={logoutHandler}
                      className="border-b transition-all duration-200 border-transparent hover:border-black text-xs md:text-sm font-medium"
                    >
                      {link.title}
                    </button>
                  ) : (
                    <Link
                      to={link.link}
                      className="border-b transition-all duration-300 border-transparent hover:border-black pb-1 text-xs md:text-sm"
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              </Tooltip>
            );
          })}
        </ul>
        <div className="flex flex-row items-center justify-center space-x-2 border-l-2 pl-2">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default MiniNav;
