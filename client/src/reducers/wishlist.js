import {
  ADD_ITEM_WISHLIST,
  CLEAR_WISHLIST,
  REMOVE_ITEM_WISHLIST,
} from '../actions/actionTypes';

export const wishlist = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_ITEM_WISHLIST:
      const exist = state.find(product => product._id === payload._id);
      if (exist) {
        state = state.filter(product => product._id !== payload._id);
        return state;
      }
      return [...state, payload];
    case REMOVE_ITEM_WISHLIST:
      const wishlistItems = state.filter(product => product._id !== payload);
      return wishlistItems;
    case CLEAR_WISHLIST:
      return [];
    default:
      return state;
  }
};
