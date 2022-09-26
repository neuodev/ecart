import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cart";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { IconButton, Rating } from "@mui/material";
import Quantity from "../common/Quantity";

const CartItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { name, price, qty, discount, image, product } = cartItem;
  const priceAfterDiscount = price - price * (discount / 100);
  const totalPrice = priceAfterDiscount * qty;
  let [showSelect, setShowSelect] = useState(false);
  let [quantity, setQuantity] = useState(qty);

  const updateQty = (qty) => {
    setQuantity(qty);
    setShowSelect(false);
    dispatch(addToCart(product, qty));
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    // <div className="flex flex-row items-center lg:justify-between relative">
    <div className="grid grid-cols-12 gap-2 items-center justify-center">
      <div className="col-span-1">
        <Link to={`/product/${product}`}>
          <img
            className="w-32 h-32 lg:h-20 xl:block lg:w-20 block overflow-hidden rounded-md mr-4 flex-grow object-contain"
            src={image}
            alt={name}
          />
        </Link>
      </div>

      <div className="col-span-4 flex items-start flex-col">
        <Link
          to={`/product/${product}`}
          className="font-medium mb-1 lg:text-lg flex-grow inline-block "
        >
          {name}
        </Link>
        <Rating value={2} size="small" readOnly />
      </div>
      <div className="flex flex-col lg:items-center lg:flex-row  lg:space-x-10 items-start justify-between flex-grow-0 w-full ">
        <p className="font-extrabold text-gray-700 block lg:hidden lg:text-sm overflow-hidden">
          ${priceAfterDiscount.toFixed(2)}
          <span className="ml-2 font-light text-sm line-through">
            {price.toFixed(2)}
          </span>
        </p>
        <div className="flex items-center space-x-4 my-1">
          <Quantity
            quantity={qty}
            setQuantity={(newQty) => {
              dispatch(addToCart(product, newQty));
            }}
          />
        </div>
        <p className="font-extrabold  text-xl">
          ${totalPrice.toFixed(2)}
          <span className="uppercase text-xs text-gray-500 font-light ml-1">
            Total
          </span>
        </p>
        <IconButton onClick={removeItemFromCart} size="small" className="">
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItems;
