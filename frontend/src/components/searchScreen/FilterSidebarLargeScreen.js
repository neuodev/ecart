import React, { useEffect, useState } from "react";
import { Radio, RadioGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORY, PRICE, BRAND } from "../../actions/actionTypes";
import getBrands from "../../utils/getBrands";

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

const FilterSidebar = () => {
  const { products } = useSelector((state) => state.searchProducts);
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [priceValue, setPriceValue] = useState(null);
  const [brands, setBrands] = useState([]);

  const handleChange = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const brandList = getBrands(products);
    setBrands(brandList);
  }, [products]);

  const categories = [
    "Electronics",
    "Computers",
    "Accessories",
    "Fashion",
    "Dress",
  ];
  const prices = [
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

  const dispatch = useDispatch();
  const setCategory = (category) => {
    dispatch({ type: CATEGORY, payload: category });
  };

  const updatePrice = (price) => {
    setPriceValue(price.text);
    dispatch({ type: PRICE, payload: price.query });
  };

  const searchByBrand = (brand) => {
    dispatch({ type: BRAND, payload: brand });
  };

  return (
    <div>
      <div className="  mt-3 w-full h-full" style={{ width: "250px" }}>
        <div className="mb-3  rounded-lg bg-gray-100    pb-6 overflow-hidden   shadow-sm">
          <div className="w-full h-10 bg-green-400 shadow-md "></div>
          <div className="flex items-center justify-between mb-2 cursor-pointer  py-2   rounded px-2">
            <h1 className="font-medium text-xl tracking-wide text-gray-900 px-2 uppercase">
              Categories
            </h1>
          </div>

          {categories.map((cat) => (
            <div
              className="text-gray-700 text-sm   mb-1  hover:bg-gray-200  py-2 cursor-pointer px-6"
              onClick={() => setCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>
        <div className=" mb-3 bg-gray-100 mt-4  rounded-lg   pb-6 overflow-hidden shadow-sm">
          <div className="w-full h-10 bg-green-300  shadow-md"></div>
          <div className=" flex items-center justify-between mb-2  pt-4  px-2 cursor-pointer">
            <h1 className="font-medium text-xl tracking-wide text-gray-900 px-2 uppercase">
              Price
            </h1>
          </div>
          <RadioGroup value={priceValue}>
            {prices.map((p) => (
              <div
                className="text-gray-700 -mb-4 font-medium cursor-pointer rounded-md  py-1  px-4 text-sm flex items-center space-x-1"
                onClick={() => updatePrice(p)}
              >
                <div>
                  <Radio value={p.text} color="default" />
                </div>
                <div>{p.text}</div>
              </div>
            ))}
          </RadioGroup>
        </div>
        {brands.length > 0 && (
          <div className="mb-3  rounded-lg bg-gray-100    pb-6 overflow-hidden   shadow-sm">
            <div className="w-full h-10 bg-green-400 shadow-md "></div>
            <div className="flex items-center justify-between mb-2 cursor-pointer  py-2   rounded px-2">
              <h1 className="font-medium text-xl tracking-wide text-gray-900 px-2 uppercase">
                Brands
              </h1>
            </div>
            <div
              onClick={() => searchByBrand("SelectNoBrand")}
              className="text-red-700 font-medium text-sm   mb-1  hover:bg-gray-200  py-2 cursor-pointer px-6"
            >
              Select No Brand
            </div>
            {brands.map((brand, idx) => (
              <div
                onClick={() => searchByBrand(brand.brand)}
                key={idx}
                className="text-gray-700 text-sm   mb-1  hover:bg-gray-200  py-2 cursor-pointer px-6"
              >
                {brand.brand} ( {brand.count} )
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
