import React, { useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { Collapse, Drawer, Radio, RadioGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AiOutlineMinus } from "react-icons/ai";
import { CATEGORY, PRICE } from "../../actions/actionTypes";
import { useDispatch } from "react-redux";

const useStyle = makeStyles({
  bg: {
    width: "250px",
    overflow: "hidden",
    backgroundColor: "#eee",
  },
  "MuiTypography-body1": {
    padding: "5px 1px",
    fontSize: "26px",
  },
});

export const CATEGORIES = [
  "Electronics",
  "Computers",
  "Accessories",
  "Fashion",
  "Dress",
];

export const PRICES = [
  {
    text: "Below $100.00",
    query: "price[lte]=100",
  },
  {
    text: "$100.00-199.00",
    query: "price[gte]=100&price[lte]=199",
  },
  {
    text: "$200.00-299.00",
    query: "price[gte]=200&price[lte]=299",
  },
  {
    text: "Above $500",
    query: "price[gte]=500",
  },
];

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);
  const [priceValue, setPriceValue] = useState("");

  const handleChange = () => {
    setOpen(!open);
  };

  // Todo: Should be extracted from current products or fetched from the backend
  const setCategory = (category) => {
    dispatch({ type: CATEGORY, payload: category });
  };

  const updatePrice = (price) => {
    setPriceValue(price.text);
    dispatch({ type: PRICE, payload: price.query });
  };

  return (
    <div>
      <button
        onClick={handleChange}
        className="py-1 px-2 bg-gray-200 rounded flex items-center justify-between space-x-1 font-medium text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-800  "
      >
        <IoOptionsOutline className="font-medium text-xl text-gray-900" />
        <p>Filter</p>
      </button>

      <Drawer
        className={classes.bg}
        open={open}
        anchor="left"
        onClose={handleChange}
      >
        <div
          className=" py-12 w-full h-full bg-gray-50 "
          style={{ width: "250px" }}
        >
          <div className="mb-3  ">
            <div
              className="flex items-center justify-between mb-2 cursor-pointer  py-2  border rounded-md px-2"
              onClick={() => setOpenCategories(!openCategories)}
            >
              <h1 className="font-medium text-xl tracking-wide text-gray-900 px-2 uppercase">
                Categories
              </h1>
              <AiOutlineMinus className="font-medium text-lg text-gray-900" />
            </div>
            <Collapse in={openCategories}>
              {CATEGORIES.map((cat) => (
                <div
                  className="text-gray-700 text-sm   mb-1  hover:bg-gray-200 rounded-md  py-1 cursor-pointer px-6 "
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </div>
              ))}
            </Collapse>
          </div>
          <div className=" mb-3 ">
            <div
              className="flex items-center justify-between mb-2 border py-3 px-2 cursor-pointer"
              onClick={() => setOpenPrice(!openPrice)}
            >
              <h1 className="font-medium text-xl tracking-wide text-gray-900 px-2 uppercase ">
                Price
              </h1>
              <AiOutlineMinus className="font-medium text-lg text-gray-900" />
            </div>
            <Collapse in={openPrice}>
              <RadioGroup
                value={priceValue}
                onChange={(e) => setPriceValue(e.target.value)}
              >
                {PRICES.map((p) => (
                  <div
                    className="text-gray-700 -mb-4 font-medium cursor-pointer rounded-md  py-1  px-4 text-sm flex items-center space-x-1"
                    onClick={() => updatePrice(p)}
                  >
                    <Radio value={p.text} color="default" />
                    <div>{p.text}</div>
                  </div>
                ))}
              </RadioGroup>
            </Collapse>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default FilterSidebar;
