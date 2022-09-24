import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../HomeScreen/ProductCard";

const Recommend = ({ recommendedProducts, q }) => {
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
          <Button LinkComponent={Link} to="/products" variant="dark">
            Browse Products
          </Button>
        </div>
      </div>
      {recommendedProducts && (
        <div className="px-4">
          <h1 className="uppercase tracking-wider font-medium text-gray-700 text-xl mx-1.5">
            Recommendation
          </h1>
          <div className="col-span-12 mx-auto md:row-start-4 md:row-end-6 md:col-span-8 grid grid-cols-12 lg:col-span-9 xl:col-span-10">
            {recommendedProducts.map((product) => (
              <div
                key={product._id}
                className="col-span-12 mx-auto  lg:col-span-6 xl:col-span-4 "
              >
                <ProductCard product={product} screen="search" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommend;
