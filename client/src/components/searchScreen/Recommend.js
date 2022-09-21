import React from "react";
import ProductCard from "../HomeScreen/ProductCard";

const Recommend = ({ recommendedProducts, q }) => {
  return (
    <div>
      <div className=" px-4 bg-yellow-100 py-4 rounded-md text-yellow-700 font-medium  mb-8 mt-5 shadow-md flex items-center   -">
        <h1>0 result found for " {q} "</h1>
      </div>

      <div className="px-4">
        <h1 className="uppercase tracking-wider font-medium text-gray-700 text-lg mb-4">
          Recommendation
        </h1>
        <div className="col-span-12 mx-auto md:row-start-4 md:row-end-6 md:col-span-8 grid grid-cols-12 lg:col-span-9 xl:col-span-10">
          {recommendedProducts &&
            recommendedProducts.map((product) => (
              <div className="col-span-12 mx-auto  lg:col-span-6 xl:col-span-4 ">
                <ProductCard product={product} screen="search" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recommend;
