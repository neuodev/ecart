import {
  ADD_ITEM_WISHLIST,
  CLEAR_WISHLIST,
  REMOVE_ITEM_WISHLIST,
} from './actionTypes';

export const addToWishlist = product => dispatch => {
  dispatch({ type: ADD_ITEM_WISHLIST, payload: product });
};
export const removeFromWishlist = productId => dispatch => {
  dispatch({ type: REMOVE_ITEM_WISHLIST, payload: productId });
};
export const clearWishlist = () => dispatch => {
  dispatch({ type: CLEAR_WISHLIST });
};
