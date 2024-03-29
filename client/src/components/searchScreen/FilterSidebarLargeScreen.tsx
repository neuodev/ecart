import { useEffect, useState } from "react";
import { Radio, RadioGroup } from "@mui/material";
import {
  filterByBrand,
  filterByCat,
  filterByPrice,
} from "../../actions/actionTypes";
import getBrands, { BrandsList } from "../../utils/getBrands";
import { CATEGORIES, PriceFilter, PRICES } from "./FilterSidebar";
import { useAppDispatch, useAppSelector } from "../../store";
import ClearFilter from "./ClearFilter";

const FilterSidebar = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.searchProducts);
  const filters = useAppSelector((state) => state.filters);
  const [brands, setBrands] = useState<BrandsList>([]);

  useEffect(() => {
    const brandList = getBrands(products);
    setBrands(brandList);
  }, [products]);

  const setCategory = (category: string | null) => {
    dispatch(filterByCat(category));
  };

  const setPrice = (price: PriceFilter | null) => {
    dispatch(filterByPrice(price));
  };

  const setBrand = (brand: string | null) => {
    dispatch(filterByBrand(brand));
  };

  return (
    <div>
      <div className="mt-3 w-full h-full" style={{ width: "250px" }}>
        <div className="mb-3 rounded-lg bg-gray-100 overflow-hidden   shadow-sm">
          <div className="flex items-center justify-between cursor-pointer py-2 bg-green-400 px-2">
            <h1 className="font-medium text-lg tracking-wide text-white px-2 capitalize">
              Categories
            </h1>
            <ClearFilter
              resetFunc={() => setCategory(null)}
              disabled={filters.category === null}
            />
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
            <ClearFilter
              resetFunc={() => setPrice(null)}
              disabled={filters.price === null}
            />
          </div>
          <RadioGroup
            value={JSON.stringify(filters.price)}
            onChange={(e) => setPrice(JSON.parse(e.target.value))}
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
        </div>
        {brands.length > 0 && (
          <div className="mb-3  rounded-lg bg-gray-100    pb-6 overflow-hidden   shadow-sm">
            <div className="flex items-center justify-between cursor-pointer py-2 bg-green-400 px-2 mb-3">
              <h1 className="font-medium text-lg tracking-wide text-white px-2 capitalize">
                Brands
              </h1>
              <ClearFilter
                resetFunc={() => setBrand(null)}
                disabled={filters.brand === null}
              />
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
