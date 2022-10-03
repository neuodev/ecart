import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../types";
import { currFormat } from "../../utils/currency";

const ProductCard2: React.FC<{
  product: IProduct;
}> = ({ product }) => {
  const { images, rating, price, name, category, _id, reviews } = product;

  return (
    <div className="py-2 px-3 text-centerr mt-1 flex items-center  overflow-hidden ">
      <div className="relative">
        <Link to={`/product/${_id}`}>
          <img
            src={images[0]}
            className="h-48 w-48 lg:h-32 flex-none block overflow-hidden mb-2 p-1.5 rounded-sm border object-contain transition-all delay-75  duration-1000 mr-2"
            alt={name}
          />
        </Link>
      </div>
      <div className="text-gray-700 overflow-hidden w-9/12 ml-3 ">
        <p className="text-xs uppercase text-gray-500">{category.join(" ")}</p>
        <Link to={`/product/${_id}`}>
          <h1 className="font-medium text-lg  mb-1 truncate overflow-hidden ">
            {name}
          </h1>
        </Link>
        <div className="flex items-center justify-start -ml-1 mb-1.5">
          <Rating readOnly value={rating} />
          {reviews.length !== 0 && (
            <span className="ml-1">({reviews.length})</span>
          )}
        </div>
        <p className="font-bold">{currFormat(price)}</p>
      </div>
    </div>
  );
};

export default ProductCard2;
