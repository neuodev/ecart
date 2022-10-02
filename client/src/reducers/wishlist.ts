import {
  ADD_ITEM_WISHLIST,
  CLEAR_WISHLIST,
  REMOVE_ITEM_WISHLIST,
} from "../actions/actionTypes";
import { IProduct } from "../types";

type Wishlist = Array<IProduct>;
type Action =
  | {
      type: typeof ADD_ITEM_WISHLIST;
      payload: IProduct;
    }
  | {
      type: typeof REMOVE_ITEM_WISHLIST;
      payload: string;
    }
  | {
      type: typeof CLEAR_WISHLIST;
      payload?: undefined;
    };

export function wishlist(
  state: Wishlist = [],
  { type, payload }: Action
): Wishlist {
  switch (type) {
    case ADD_ITEM_WISHLIST:
      const exist = state.find((product) => product._id === payload._id);
      if (exist) {
        state = state.filter((product) => product._id !== payload._id);
        return state;
      }
      return [...state, payload];
    case REMOVE_ITEM_WISHLIST:
      const wishlistItems = state.filter((product) => product._id !== payload);
      return wishlistItems;
    case CLEAR_WISHLIST:
      return [];
    default:
      return state;
  }
}
