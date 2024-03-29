import React, { useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { Button, Collapse, Drawer, Radio, RadioGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { filterByCat, filterByPrice } from "../../actions/actionTypes";
import { useSelector } from "react-redux";
import ClearFilter from "./ClearFilter";
import { RootState, useAppDispatch } from "../../store";

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

export type PriceFilter = Array<{
  key: string;
  value: number;
}>;

export const PRICES: Array<{
  text: string;
  query: string;
  queryObj: PriceFilter;
}> = [
  {
    text: "Below $100.00",
    query: "price[lte]=100",
    queryObj: [
      {
        key: "price[lte]",
        value: 100,
      },
    ],
  },
  {
    text: "$100.00-199.00",
    query: "price[gte]=100&price[lte]=199",
    queryObj: [
      {
        key: "price[gte]",
        value: 100,
      },
      {
        key: "price[lte]",
        value: 199,
      },
    ],
  },
  {
    text: "$200.00-299.00",
    query: "price[gte]=200&price[lte]=299",
    queryObj: [
      {
        key: "price[gte]",
        value: 200,
      },
      {
        key: "price[lte]",
        value: 399,
      },
    ],
  },
  {
    text: "Above $500",
    query: "price[gte]=500",
    queryObj: [
      {
        key: "price[gte]",
        value: 500,
      },
    ],
  },
];

const FilterSidebar = () => {
  const dispatch = useAppDispatch();
  const filters = useSelector<RootState, RootState["filters"]>(
    (state) => state.filters
  );
  const classes = useStyle();
  const [open, setOpen] = useState<boolean>(false);
  const [openCategories, setOpenCategories] = useState<boolean>(true);
  const [openPrice, setOpenPrice] = useState<boolean>(true);

  const handleChange = () => {
    setOpen(!open);
  };

  const setCategory = (category: string | null) => {
    dispatch(filterByCat(category));
  };

  const setPrice = (price: PriceFilter | null) => {
    dispatch(filterByPrice(price));
  };

  return (
    <div>
      <Button
        sx={{
          maxWidth: "150px",
          minWidth: "unset",
          fontSize: "11px",
          height: "32px",
          minHeight: "unset",
        }}
        variant="outlined"
        onClick={handleChange}
        startIcon={<IoOptionsOutline className="font-medium text-xl" />}
      >
        Filter
      </Button>
      <Drawer
        className={classes.bg}
        open={open}
        anchor="left"
        onClose={handleChange}
      >
        <div className="w-full h-full bg-gray-50" style={{ width: "250px" }}>
          <h1 className="text-xl px-2 py-4 font-bold">Filters</h1>
          <div className="flex items-center justify-between cursor-pointer border">
            <h1
              onClick={() => setOpenCategories(!openCategories)}
              className="font-medium text-lg tracking-wide text-gray-900 px-2 capitalize py-2 w-full"
            >
              Categories
            </h1>
            <ClearFilter
              resetFunc={() => setCategory(null)}
              disabled={filters.category === null}
            />
          </div>
          <Collapse in={openCategories}>
            {CATEGORIES.map((cat) => (
              <div
                key={cat}
                className={`text-gray-700 text-sm hover:bg-gray-200 rounded-md py-1.5 cursor-pointer px-6 ${
                  filters.category === cat && "bg-gray-200"
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </div>
            ))}
          </Collapse>
          <div className="flex items-center justify-between border cursor-pointer">
            <h1
              onClick={() => setOpenPrice(!openPrice)}
              className="font-medium text-xl tracking-wide text-gray-900 px-2 capitalize py-2 w-full"
            >
              Prices
            </h1>
            <ClearFilter
              resetFunc={() => setPrice(null)}
              disabled={filters.price === null}
            />
          </div>
          <Collapse in={openPrice}>
            <RadioGroup
              value={JSON.stringify(filters.price)}
              onChange={(e) => {
                setPrice(JSON.parse(e.target.value) as PriceFilter);
              }}
            >
              {PRICES.map((p) => (
                <div
                  key={p.text}
                  className="text-gray-700 -mb-4 font-medium cursor-pointer rounded-md py-1 px-4 text-sm flex items-center space-x-1"
                >
                  <Radio value={JSON.stringify(p.queryObj)} color="default" />
                  <div>{p.text}</div>
                </div>
              ))}
            </RadioGroup>
          </Collapse>
        </div>
      </Drawer>
    </div>
  );
};

export default FilterSidebar;
