import {
  FEATURED_PRODUCTS_FAIL,
  FEATURED_PRODUCTS_REQUEST,
  FEATURED_PRODUCTS_SUCCESS,
} from "../actions/actionTypes";
import { BaseState, IProduct } from "../types";

export const featuredProducts = (
  state: BaseState<{ products: IProduct[] }> = {
    products: [],
    loading: false,
    error: null,
  },
  {
    payload,
    type,
  }:
    | {
        type: typeof FEATURED_PRODUCTS_REQUEST;
        payload: undefined;
      }
    | {
        type: typeof FEATURED_PRODUCTS_SUCCESS;
        payload: IProduct[];
      }
    | {
        type: typeof FEATURED_PRODUCTS_FAIL;
        payload: string;
      }
) => {
  switch (type) {
    case FEATURED_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FEATURED_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case FEATURED_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
