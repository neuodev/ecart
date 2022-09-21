import { SwipeableDrawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCreditCard,
  AiOutlineInbox,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiUsers, FiHeadphones } from "react-icons/fi";
import { BiCartAlt } from "react-icons/bi";
import SearchSmallScreen from "./SearchSmallScreen";

const useStyle = makeStyles(() => ({
  list: {
    width: 250,
  },
}));

const Sidebar = ({ toggle, history }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (event) => {
    setOpen(!open);
  };

  const list = [
    {
      title: "Home",
      icon: <AiOutlineHome />,
      link: "/",
    },
    {
      title: "Products",
      icon: <AiOutlineInbox />,
      link: "/products",
    },

    {
      title: "Contact Us ",
      icon: <FiHeadphones />,
      link: "/",
    },
    {
      title: "My Account ",
      icon: <AiOutlineUser />,
      link: "/account",
    },
    {
      title: " Check Out",
      icon: <AiOutlineCreditCard />,
      link: "/checkouts",
    },
    {
      title: "Shopping Cart ",
      icon: <BiCartAlt />,
      link: "/cart/123",
    },
    {
      title: "About Us ",
      icon: <FiUsers />,
      link: "/",
    },
    {
      title: "FAQs ",
      icon: <AiOutlineQuestionCircle />,
      link: "/",
    },
  ];

  return (
    <div>
      <FaBars
        className="mr-2 text-lg text-gray-500"
        onClick={(e) => toggleDrawer(e)}
      />
      <SwipeableDrawer
        className={classes.bg}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div className="flex  flex-col h-full  pt-12 bg-gray-800">
          <SearchSmallScreen />
          {list.map((link, idx) => (
            <Link
              key={idx}
              onClick={toggleDrawer}
              to={link.link}
              className="hover:bg-gray-700 w-60 py-2 rounded-md pl-4 font-medium  text-white flex items-center space-x-2"
            >
              <span>{link.icon}</span>
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Sidebar;
