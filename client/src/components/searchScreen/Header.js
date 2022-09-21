import { Breadcrumbs, Link } from "@mui/material";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

import { useDispatch } from "react-redux";
import {
  ASCENDING_ORDER,
  DECENDING_ORDER,
  NUMBER_PER_PAGE,
} from "../../actions/actionTypes";
import FilterSidebar from "./FilterSidebar";
const Header = () => {
  const [numPerPage, setNumberPage] = useState(10);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const sort = (filter) => {
    if (filter === "name") {
      dispatch({ type: ASCENDING_ORDER });
    } else {
      dispatch({ type: DECENDING_ORDER });
    }
  };
  const numbers = [5, 10, 15, 20, 30];
  const updateNumPerPage = (num) => {
    dispatch({ type: NUMBER_PER_PAGE, payload: num });
    setNumberPage(num);
    setOpen(false);
  };

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#numbers-menu") && !e.target.closest("#open-menu")) {
      setOpen(false);
    }
  });
  return (
    <div>
      <div className="mb-5">
        <Breadcrumbs>
          <Link href="/">
            <AiOutlineHome className="text-gray-400 " />
          </Link>
          <Link>
            <h1 className="text-gray-800 ">Products</h1>
          </Link>
        </Breadcrumbs>
      </div>
      <div className="flex items-center justify-between bg-gray-100 my-2 px-3 py-3 rounded mb-6">
        <div className="flex items-center justify-between space-x-2 ">
          <div className="md:hidden">
            <FilterSidebar />
          </div>
          <h2 className="flex items-center  text-2xl text-gray-900 ">
            <button
              className="bg-gray-200  p-1  rounded   mx-1 focus:outline-none focus:ring-1  focus:ring-green-400  focus:text-green-500"
              onClick={() => sort("name")}
            >
              <AiOutlineSortAscending />
            </button>
            <button
              className="bg-gray-200  p-1  rounded   mx-1 focus:outline-none focus:ring-1 focus:ring-green-400  focus:text-green-500 "
              onClick={() => sort("-name")}
            >
              <AiOutlineSortDescending />{" "}
            </button>
          </h2>
        </div>
        <div className="flex  items-center justify-between space-x-2">
          <div className="relative">
            <p className="text-xs">Number</p>
            <div>
              <p
                className="font-medium border rounded-lg  px-2 w-16 text-center"
                onClick={() => setOpen(!open)}
                id="open-menu"
              >
                {numPerPage}
              </p>
              {open && (
                <ul
                  id="numbers-menu"
                  className="absolute z-40 bg-gray-200 w-20 -left-3 text-center shadow-xl rounded-lg py-2  "
                >
                  {numbers.map((num) => (
                    <li
                      className="hover:bg-gray-100 cursor-pointer "
                      onClick={() => updateNumPerPage(num)}
                    >
                      {num}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
