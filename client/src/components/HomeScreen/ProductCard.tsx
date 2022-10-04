import { FavoriteBorderOutlined, Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { IconButton, Rating } from "@mui/material";
import React from "react";
import { toggleWishslistItem } from "../../actions/whishlist";
import { IProduct } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store";
import { currFormat } from "../../utils/currency";
import "./style.css";

const ProductCard: React.FC<{
  product: IProduct;
}> = ({ product }) => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist);

  const { price, images, rating, name, category, _id, reviews } = product;
  let existInWishlist = wishlist.find((product) => product._id === _id);

  const addToWishlistHandler = () => {
    dispatch(toggleWishslistItem(product));
  };

  return (
    <div className="relative">
      <div className="text-center flex items-center justify-center py-3 space-x-3 absolute -top-1 left-2 z-10">
        <IconButton onClick={addToWishlistHandler}>
          {existInWishlist ? <Favorite /> : <FavoriteBorderOutlined />}
        </IconButton>
      </div>
      <div className="overflow-hidden">
        <Link to={`/product/${_id}`}>
          <div className="h-72">
            <img
              className="border h-full w-full inline-block object-contain p-3 rounded-md overflow-hidden"
              src={images[0]}
              alt={name}
            />
          </div>
        </Link>
      </div>
      <div className="text-gray-700 flex-col flex justify-between">
        <p className="text-xs capitalize text-gray-500 font-light mt-3 ">
          {category && category.join(" ,  ")}
        </p>
        <Link to={`/product/${_id}`}>
          <h1 className="font-medium mb-1 truncate">{name}</h1>
        </Link>
        <p className="font-bold text-xl mr-2">{currFormat(price)}</p>
        <div className="flex items-center mt-1">
          <Rating readOnly size="small" value={rating} />
          {reviews.length !== 0 && (
            <span className="ml-1">({reviews.length})</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
