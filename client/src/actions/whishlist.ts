import { AppDispatch } from "../store";
import { IProduct } from "../types";
import { TOGGLE_WISHLIST_ITEM, CLEAR_WISHLIST } from "./actionTypes";

export const toggleWishslistItem =
  (product: IProduct) => (dispatch: AppDispatch) => {
    dispatch({ type: TOGGLE_WISHLIST_ITEM, payload: product });
  };

export const clearWishlist = () => (dispatch: AppDispatch) => {
  dispatch({ type: CLEAR_WISHLIST });
};
