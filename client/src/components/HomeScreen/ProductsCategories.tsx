import React, { useEffect } from "react";
import ProductCard2 from "./ProductCard2";
import { Skeleton } from "@mui/material";
import {
  getBestSellingProducts,
  getLatestProducts,
  getTopRatedProducts,
} from "../../actions/products";
import { useAppDispatch, useAppSelector } from "../../store";

const ProductsCategories: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { topRatedProducts, bestSellingProducts, latestProducts } =
    useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getTopRatedProducts());
    dispatch(getBestSellingProducts());
    dispatch(getLatestProducts());
  }, []);

  return (
    <div className="py-12">
      <div className="grid grid-cols-12 container mx-auto">
        <div className="mb-8 col-span-12 md:col-span-6 lg:col-span-4 ">
          <h1 className="uppercase mx-4 font-medium tracking-wide text-xl text-gray-600">
            top rated products
          </h1>
          {topRatedProducts.loading && (
            <div className="mt-4">
              <div className="mb-4">
                <Skeleton width={210} height={118} />
                <Skeleton variant="text" width={210} />
                <Skeleton variant="text" width={210} />
              </div>
              <Skeleton variant="rectangular" width={210} height={118} />{" "}
              <Skeleton variant="text" width={210} />
              <Skeleton variant="text" width={210} />
            </div>
          )}
          {topRatedProducts.products.map((product) => (
            <ProductCard2 key={product._id} product={product} />
          ))}
        </div>
        <div className="mb-8 col-span-12  md:col-span-6 lg:col-span-4">
          <h1 className="uppercase mx-4 font-medium tracking-wide  text-gray-600">
            BEST SELLING PRODUCTS
          </h1>
          {bestSellingProducts.loading && (
            <div className="mt-4">
              {" "}
              <div className="mb-4">
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="text" width={210} />
                <Skeleton variant="text" width={210} />
              </div>{" "}
              <Skeleton variant="rectangular" width={210} height={118} />{" "}
              <Skeleton variant="text" width={210} />
              <Skeleton variant="text" width={210} />
            </div>
          )}
          {bestSellingProducts.products.map((product, idx) => (
            <ProductCard2 product={product} key={idx} />
          ))}
        </div>
        <div className=" col-span-12 md:col-span-6 lg:col-span-4">
          <h1 className="uppercase mx-4 font-medium tracking-wide text-gray-600">
            LATEST PRODUCTS
          </h1>
          {latestProducts.loading && (
            <div className="mt-4">
              {" "}
              <div className="mb-4">
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="text" width={210} />
                <Skeleton variant="text" width={210} />
              </div>{" "}
              <Skeleton variant="rectangular" width={210} height={118} />{" "}
              <Skeleton variant="text" width={210} />
              <Skeleton variant="text" width={210} />
            </div>
          )}
          {latestProducts.products.map((product, idx) => (
            <ProductCard2 product={product} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCategories;
