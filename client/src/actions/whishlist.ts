import { AppDispatch } from "../store";
import { IProduct } from "../types";
import {
  ADD_ITEM_WISHLIST,
  CLEAR_WISHLIST,
  REMOVE_ITEM_WISHLIST,
} from "./actionTypes";

export const addToWishlist = (product: IProduct) => (dispatch: AppDispatch) => {
  dispatch({ type: ADD_ITEM_WISHLIST, payload: product });
};
export const removeFromWishlist =
  (productId: string) => (dispatch: AppDispatch) => {
    dispatch({ type: REMOVE_ITEM_WISHLIST, payload: productId });
  };
export const clearWishlist = () => (dispatch: AppDispatch) => {
  dispatch({ type: CLEAR_WISHLIST });
};
