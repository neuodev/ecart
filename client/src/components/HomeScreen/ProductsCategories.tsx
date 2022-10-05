import React, { useEffect } from "react";
import SmallCard from "./smallCard";
import { Alert, AlertTitle, Skeleton } from "@mui/material";
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

  const categories = [
    {
      title: "Top rated products",
      products: topRatedProducts,
    },
    {
      title: "Best selling products",
      products: bestSellingProducts,
    },
    {
      title: "Latest products",
      products: latestProducts,
    },
  ];

  return (
    <div className="pb-12 md:py-12">
      <div className="grid grid-cols-12 container mx-auto">
        {categories.map(({ title, products: { loading, products, error } }) => (
          <div className="mb-8 col-span-12 md:col-span-6 lg:col-span-4 ">
            <h1 className="uppercase mx-4 font-medium tracking-wide text-2xl md:text-xl text-gray-600 text-center md:text-start">
              {title}
            </h1>
            {topRatedProducts.loading ? (
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
            ) : error ? (
              <div>
                <Alert color="error">
                  <AlertTitle>Error</AlertTitle>
                  {error}
                </Alert>
              </div>
            ) : (
              <div>
                {products.map((product) => (
                  <SmallCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategories;
