import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_CLEAR_ITEMS,
  CART_SAVE_SHIPPING_METHOD,
} from "../actions/actionTypes";
import { ICartItem } from "../types";

export const cartReducer = (
  state: {
    cartItems: ICartItem[];
    shippingAddress: {} | null;
    paymentMethod: {} | null;
  } = { cartItems: [], shippingAddress: null, paymentMethod: null },
  {
    type,
    payload,
  }:
    | {
        type: typeof CART_ADD_ITEM;
        payload: ICartItem;
      }
    | {
        type: typeof CART_REMOVE_ITEM;
        payload: string;
      }
    | {
        type: typeof CART_SAVE_SHIPPING_ADDRESS;
        payload: {};
      }
    | {
        type: typeof CART_SAVE_SHIPPING_ADDRESS;
        payload: {};
      }
    | {
        type: typeof CART_SAVE_SHIPPING_METHOD;
        payload: {};
      }
    | { type: typeof CART_SAVE_PAYMENT_METHOD; payload: {} }
    | {
        type: typeof CART_CLEAR_ITEMS;
        payload: undefined;
      }
) => {
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

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
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload,
      };
    case CART_SAVE_SHIPPING_METHOD:
      return {
        ...state,
        shippingMethod: payload,
      };
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
