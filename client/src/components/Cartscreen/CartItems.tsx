import React from "react";
import { addToCart, removeFromCart } from "../../actions/cart";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { IconButton, Rating, useMediaQuery } from "@mui/material";
import Quantity from "../common/Quantity";
import { currFormat } from "../../utils/currency";
import { ICartItem } from "../../types";
import { useAppDispatch } from "../../store";
import CartItem from "../Cart/CartItem";

const CartItems: React.FC<{
  cartItem: ICartItem;
}> = ({ cartItem }) => {
  let issm = useMediaQuery("(min-width: 640px)");
  const dispatch = useAppDispatch();
  const { name, price, qty, discount, image, product, rating } = cartItem;
  const priceAfterDiscount = price - price * (discount / 100);
  const totalPrice = priceAfterDiscount * qty;

  const removeItemFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <>
      {issm ? (
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
              className="font-medium mb-1 lg:text-lg flex-grow inline-block w-11/12 truncate"
            >
              {name}
            </Link>
            <Rating value={rating} size="small" readOnly />
          </div>
          <div className="col-span-3">
            <Quantity
              quantity={qty}
              setQuantity={(newQty: number) => {
                dispatch(addToCart(product, newQty));
              }}
            />
          </div>
          <div className="col-span-3">
            <p className="font-extrabold text-xl">
              {currFormat(totalPrice)}
              <span className="capitalize text-xs text-gray-500 font-light ml-1">
                Total
              </span>
            </p>
          </div>
          <div className="col-span-1">
            <IconButton onClick={removeItemFromCart} size="small">
              <Close />
            </IconButton>
          </div>
        </div>
      ) : (
        <div>
          <CartItem cartItem={cartItem} />
        </div>
      )}
    </>
  );
};

export default CartItems;
