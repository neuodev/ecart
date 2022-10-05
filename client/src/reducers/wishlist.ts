import { createReducer } from "@reduxjs/toolkit";
import { toggleWishlistItem, clearWishlist } from "../actions/actionTypes";
import { LOCAL_STORAGE } from "../constants";
import { IProduct } from "../types";

export type Wishlist = Array<IProduct>;

export const wishlist = createReducer<Wishlist>([], (builder) => {
  builder
    .addCase(toggleWishlistItem, (state, { payload }) => {
      const exist = state.find((product) => product._id === payload._id);
      const newState = exist
        ? state.filter((product) => product._id !== payload._id)
        : [...state, payload];
      localStorage.setItem(LOCAL_STORAGE.wishlist, JSON.stringify(newState));
      return newState;
    })
    .addCase(clearWishlist, () => {
      localStorage.setItem(LOCAL_STORAGE.wishlist, JSON.stringify([]));
      return [];
    });
});
