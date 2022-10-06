import { Button, Rating } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toggleWishlistItem } from "../../actions/actionTypes";
import { useAppDispatch } from "../../store";
import { IProduct } from "../../types";

const WishListItem: React.FC<{
  product: IProduct;
  handleClose?: () => void;
}> = ({ product, handleClose }) => {
  const dispatch = useAppDispatch();
  const naviage = useNavigate();

  const { name, images, brand, rating, _id } = product;

  const addToCart = () => {
    naviage(`/cart/${_id}?qty=1`);
    if (handleClose) handleClose();
    toggleWishslistItem();
  };

  const toggleWishslistItem = () => {
    dispatch(toggleWishlistItem(product));
  };

  return (
    <div className="flex flex-col md:flex-row items-start mb-6">
      <div className="flex items-center justify-center w-full">
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
          <div className="-ml-1">
            <Rating value={rating} readOnly />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full md:w-auto mt-4 flex-shrink-0">
        <div className="col-span-1 md:col-span-2">
          <Button
            onClick={addToCart}
            sx={{ width: "100%" }}
            variant="dark"
            size="small"
          >
            Add to cart
          </Button>
        </div>
        <div className="col-span-1 md:col-span-2">
          <Button
            sx={{ width: "100%" }}
            onClick={toggleWishslistItem}
            variant="dark-outlined"
            size="small"
          >
            Not now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
