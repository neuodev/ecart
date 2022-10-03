import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  SwipeableDrawer,
} from "@mui/material";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCreditCard,
  AiOutlineInbox,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FiUsers, FiHeadphones } from "react-icons/fi";
import { BiCartAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { RESET_FILTERS } from "../../actions/actionTypes";
import { Search } from "@mui/icons-material";
import { useAppDispatch } from "../../store";

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
const Sidebar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/products?q=${search}`);
    dispatch({ type: RESET_FILTERS });
    setOpen(false);
    setSearch("");
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton onClick={() => setOpen(true)} className="mr-2">
        <FaBars className="text-lg text-gray-500" />
      </IconButton>
      <SwipeableDrawer
        onOpen={() => {}}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div className="flex flex-col h-full pt-12 bg-gray-50">
          <div className="px-2">
            <form
              onSubmit={onSearch}
              className="bg-white flex items-center justify-center"
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products.."
                className="inline-block w-full focus:outline-none px-2 py-1"
              />
              <IconButton type="submit" disabled={!search}>
                <Search />
              </IconButton>
            </form>
          </div>

          <MenuList>
            {list.map((link, idx) => (
              <MenuItem
                key={idx}
                onClick={() => {
                  navigate(link.link);
                  setOpen(false);
                }}
              >
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText>{link.title}</ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Sidebar;
