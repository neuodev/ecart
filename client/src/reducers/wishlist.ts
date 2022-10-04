import { ADD_ITEM_WISHLIST, CLEAR_WISHLIST } from "../actions/actionTypes";
import { LOCAL_STORAGE } from "../constants";
import { IProduct } from "../types";

export type Wishlist = Array<IProduct>;
type Action =
  | {
      type: typeof ADD_ITEM_WISHLIST;
      payload: IProduct;
    }
  | {
      type: typeof CLEAR_WISHLIST;
      payload?: undefined;
    };

export function wishlist(
  state: Wishlist = [],
  { type, payload }: Action
): Wishlist {
  let newState: Wishlist;

  switch (type) {
    case ADD_ITEM_WISHLIST:
      const exist = state.find((product) => product._id === payload._id);
      newState = exist
        ? state.filter((product) => product._id !== payload._id)
        : [...state, payload];
      break;
    case CLEAR_WISHLIST:
      newState = [];
      break;
    default:
      return state;
  }

  localStorage.setItem(LOCAL_STORAGE.wishlist, JSON.stringify(newState));
  return newState;
}
