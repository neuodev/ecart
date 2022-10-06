import { Close } from "@mui/icons-material";
import { IconButton, Rating } from "@mui/material";
import React from "react";
import { removeFromCart } from "../../actions/cart";
import { useAppDispatch } from "../../store";
import { ICartItem } from "../../types";
import { currFormat } from "../../utils/currency";

const CartItem: React.FC<{
  cartItem: ICartItem;
}> = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  const { name, qty, price, discount, image, product, rating } = cartItem;
  const priceAfterDiscount = price - price * (discount / 100);

  const deleteCartItem = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="flex items-center my-3">
      <div className="h-24 w-24 overflow-hidden rounded-md flex-none flex items-center justify-center border p-2">
        <img
          className="object-contain inline-block w-full h-full"
          src={image}
          alt={name}
        />
      </div>
      <div className="flex items-start justify-center flex-col w-full ml-4">
        <h1 className="font-sans font-medium mb-1 w-40 lg:w-auto truncate">
          {name}
        </h1>
        <Rating value={rating} readOnly size="small" className="mb-1" />
        <p className="text-gray-600 font-light">
          {qty} x {currFormat(priceAfterDiscount)}
        </p>
      </div>

      <IconButton onClick={deleteCartItem} className="w-10 h-10">
        <Close />
      </IconButton>
    </div>
  );
};

export default CartItem;
