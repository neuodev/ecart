import { createReducer } from "@reduxjs/toolkit";
import {
  addCartItemAction,
  delCartItemAction,
  saveShippingAddr,
  savePayment,
  saveShippingMethod,
  clearCart,
} from "../actions/actionTypes";
import { ICartItem, ShippingAddr, ShippingMethod } from "../types";

type CartState = {
  cartItems: ICartItem[];
  shippingAddress: ShippingAddr | null;
  paymentMethod: string | null;
  shippingMethod: ShippingMethod | null;
};

export const cartReducer = createReducer<CartState>(
  {
    cartItems: [],
    shippingAddress: null,
    paymentMethod: null,
    shippingMethod: null,
  },
  (builder) => {
    builder
      .addCase(addCartItemAction, (state, { payload }) => {
        const item = payload;
        const existItem = state.cartItems.find(
          (x) => x.product === item.product
        );

        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
      })
      .addCase(delCartItemAction, (state, { payload }) => {
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product !== payload),
        };
      })
      .addCase(saveShippingAddr, (state, { payload }) => ({
        ...state,
        shippingAddress: payload,
      }))
      .addCase(savePayment, (state, { payload }) => ({
        ...state,
        paymentMethod: payload,
      }))
      .addCase(saveShippingMethod, (state, { payload }) => ({
        ...state,
        shippingMethod: payload,
      }))
      .addCase(clearCart, (state, { payload }) => ({
        ...state,
        cartItems: [],
      }));
  }
);
