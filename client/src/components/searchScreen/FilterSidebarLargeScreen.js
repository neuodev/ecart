import React, { useEffect, useState } from "react";
import {
  IconButton,
  Radio,
  RadioGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORY, PRICE, BRAND } from "../../actions/actionTypes";
import getBrands from "../../utils/getBrands";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { CATEGORIES, PRICES } from "./FilterSidebar";

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.searchProducts);
  const [brands, setBrands] = useState([]);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    const brandList = getBrands(products);
    setBrands(brandList);
  }, [products]);

  const setCategory = (category) => {
    dispatch({ type: CATEGORY, payload: category });
  };

  const setPrice = (price) => {
    dispatch({ type: PRICE, payload: price });
  };

  const setBrand = (brand) => {
    dispatch({ type: BRAND, payload: brand });
  };

  return (
    <div>
      <div className="mt-3 w-full h-full" style={{ width: "250px" }}>
        <div className="mb-3 rounded-lg bg-gray-100 overflow-hidden   shadow-sm">
          <div className="flex items-center justify-between cursor-pointer py-2 bg-green-400 px-2">
            <h1 className="font-medium text-lg tracking-wide text-white px-2 capitalize">
              Categories
            </h1>
            <Tooltip
              arrow
              placement="top"
              title={<Typography>Clear filter</Typography>}
            >
              <IconButton
                disabled={filters.category === null}
                onClick={() => setCategory(null)}
                size="small"
              >
                <HighlightOffIcon />
              </IconButton>
            </Tooltip>
          </div>
          {CATEGORIES.map((cat) => (
            <div
              key={cat}
              className={`text-gray-700 text-sm hover:bg-gray-200  py-2 cursor-pointer px-6 ${
                filters.category === cat && "bg-gray-200"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>
        <div className=" mb-3 bg-gray-100 mt-4  rounded-lg   pb-6 overflow-hidden shadow-sm">
          <div className="flex items-center justify-between cursor-pointer py-2 bg-green-400 px-2">
            <h1 className="font-medium text-lg tracking-wide text-white px-2 capitalize">
              Prices
            </h1>
            <Tooltip
              arrow
              placement="top"
              title={<Typography>Clear filter</Typography>}
            >
              <IconButton
                disabled={filters.price === null}
                onClick={() => setPrice(null)}
                size="small"
              >
                <HighlightOffIcon />
              </IconButton>
            </Tooltip>
          </div>
          <RadioGroup value={filters.price}>
            {PRICES.map((p) => (
              <div
                className="text-gray-700 -mb-4 font-medium cursor-pointer rounded-md  py-1  px-4 text-sm flex items-center space-x-1"
                onClick={() => setPrice(p.query)}
              >
                <div>
                  <Radio value={p.query} color="default" />
                </div>
                <div>{p.text}</div>
              </div>
            ))}
          </RadioGroup>
        </div>
        {brands.length > 0 && (
          <div className="mb-3  rounded-lg bg-gray-100    pb-6 overflow-hidden   shadow-sm">
            <div className="flex items-center justify-between cursor-pointer py-2 bg-green-400 px-2 mb-3">
              <h1 className="font-medium text-lg tracking-wide text-white px-2 capitalize">
                Brands
              </h1>
              <Tooltip
                arrow
                placement="top"
                title={<Typography>Clear filter</Typography>}
              >
                <IconButton
                  disabled={filters.brand === null}
                  onClick={() => setBrand(null)}
                  size="small"
                >
                  <HighlightOffIcon />
                </IconButton>
              </Tooltip>
            </div>
            {brands.map(({ brand, count }, idx) => (
              <div
                onClick={() => setBrand(brand)}
                key={idx}
                className={`text-gray-700 text-sm mb-1 hover:bg-gray-200 py-2 cursor-pointer px-6 ${
                  filters.brand === brand && "bg-gray-200"
                }`}
              >
                {brand} ( {count} )
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
