import { Button, Rating } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../actions/whishlist";
import { Link, useNavigate } from "react-router-dom";

const WishListItem = ({ product, handleClose }) => {
  const dispatch = useDispatch();
  const naviage = useNavigate();

  const { name, images, brand, rating, _id } = product;

  const addToCart = () => {
    naviage(`/cart/${_id}?qty=1`);
    handleClose();
    dispatch(removeFromWishlist(_id));
  };

  const removeFromWishlistHandler = () => {
    dispatch(removeFromWishlist(_id));
  };

  return (
    <div className="flex items-center mb-4">
      <Link to={`/product/${_id}`} className="inline-block mr-3 shrink-0">
        <img
          className="w-24 h-24 border rounded-sm overflow-hidden inline-block flex-none object-contain p-1"
          src={images[0]}
          alt={name}
        />
      </Link>
      <Link to={`/product/${_id}`} className="inline-block w-full">
        <p className="text-sm font-light text-gray-400">{brand}</p>
        <p className="font-medium">{name}</p>
        <Rating value={rating} readOnly />
      </Link>
      <div className="flex items-center justify-end flex-col">
        <Button onClick={addToCart} variant="dark" size="small">
          Add to cart
        </Button>
        <Button
          sx={{ mt: "4px" }}
          onClick={removeFromWishlistHandler}
          variant="dark-outlined"
          size="small"
        >
          Not now
        </Button>
      </div>
    </div>
  );
};

export default WishListItem;
