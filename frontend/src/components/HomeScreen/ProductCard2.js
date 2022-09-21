import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard2 = ({ product }) => {
  const { images, rating, price, name, category, _id } = product;

  return (
    <div className="py-2 px-3 text-centerr mt-1 flex items-center  overflow-hidden ">
      <div className="relative">
        <Link to={`/product/${_id}`}>
          <img
            src={images[0]}
            className=" h-48 w-48   lg:h-32  flex-none block  overflow-hidden mb-2 rounded-sm border object-cover transition-all delay-75  duration-1000 mr-2"
            alt=""
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
        <Rating readOnly value={rating} />
        <p className="font-bold ">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard2;
