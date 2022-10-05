import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { resetFilters } from "../../actions/actionTypes";
import { ROUTES } from "../../constants/routes";
import { useAppDispatch } from "../../store";
import { IProduct } from "../../types";
import ProductCard from "../HomeScreen/ProductCard";

const Recommend: React.FC<{
  recommendedProducts: IProduct[];
}> = ({ recommendedProducts }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center flex-col lg:flex-row justify-center mb-10">
        <img
          src="/images/notfound.png"
          alt="Products not found"
          title="Not found"
          className="inline-block w-96"
        />

        <div className="flex flex-col items-center justify-center lg:ml-2">
          <h1 className="text-2xl font-semibold mb-4">Products not found</h1>
          <Button
            onClick={() => {
              dispatch(resetFilters());
              navigate(ROUTES.PRODUCTS);
            }}
            variant="dark"
          >
            Browse Products
          </Button>
        </div>
      </div>
      {recommendedProducts.length !== 0 && (
        <div className="px-4">
          <h1 className="uppercase tracking-wider font-medium text-gray-700 text-2xl mb-4">
            Recommendation
          </h1>
          <div className="grid grid-cols-12 gap-5">
            {recommendedProducts.map((product) => (
              <div
                key={product._id}
                className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommend;
