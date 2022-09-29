import { useNavigate } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/user";
import { Tooltip, Typography } from "@mui/material";

const SOCIAL_LINKS = [
  {
    icon: <Facebook />,
    tooltip: "Follow us on Facebook",
  },
  {
    icon: <Twitter />,
    tooltip: "Follow us on Twitter",
  },
  {
    icon: <Instagram />,
    tooltip: "Follow us on Instagram",
  },
];

const MiniNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);

  const links = [
    {
      title: " My Account",
      onClick: () => navigate("/account"),
      tooltip: "See your latest orders",
    },
    {
      title: "Contact Us",
      onClick: () => navigate("/"),
      tooltip: "Contact as at support@wallet.io",
    },
    {
      title: " Wishlist",
      onClick: () => navigate("/account/wishlist"),
      tooltip: "Check your wishlist",
    },
    {
      title: "Login",
      onClick: () => navigate("/login"),
      tooltip: "Login to your account so you can buy our products",
    },
    {
      title: "Logout",
      onClick: () => dispatch(logout()),
      tooltip: "Logout from your current account",
    },
  ];

  const filteredLinks = links.filter(({ title }) => {
    if (userInfo && userInfo._id) return title.toLocaleLowerCase() !== "login";
    return title.toLocaleLowerCase() !== "logout";
  });

  return (
    <div className="bg-gray-100">
      <div className="flex flex-row container mx-auto w-full  justify-between items-center px-5 py-1 bg-gray-100">
        <ul className="flex flex-row text-sm container mx-auto  space-x-4 font-medium items-center ">
          {filteredLinks.map(({ title, onClick, tooltip }, idx) => {
            return (
              <Tooltip
                key={idx}
                arrow
                followCursor
                title={
                  <Typography sx={{ textAlign: "center" }} variant="caption">
                    {tooltip}
                  </Typography>
                }
              >
                <li key={idx}>
                  <button
                    onClick={onClick}
                    className="border-b transition-all duration-200 border-transparent hover:border-black text-xs md:text-sm font-medium"
                  >
                    {title}
                  </button>
                </li>
              </Tooltip>
            );
          })}
        </ul>
        <div className="flex flex-row items-center justify-center space-x-2 border-l-2 pl-2">
          {SOCIAL_LINKS.map(({ icon, tooltip }, idx) => (
            <Tooltip
              arrow
              followCursor
              placement="bottom"
              key={idx}
              title={
                <Typography variant="caption" textAlign="center">
                  {tooltip}
                </Typography>
              }
            >
              <span className="cursor-pointer">{icon}</span>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniNav;
