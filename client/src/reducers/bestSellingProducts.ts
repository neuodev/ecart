import {
  BEST_SELLING_PRODUCTS_REQUEST,
  BEST_SELLING_PRODUCTS_SUCCESS,
  BEST_SELLING_PRODUCTS_FAIL,
} from "../actions/actionTypes";
import { IProduct } from "../types";

export const bestSellingProducts = (
  state: {
    products: IProduct[];
    loading: boolean;
    error: string | null;
  } = { products: [], loading: false, error: null },
  {
    payload,
    type,
  }:
    | {
        type: typeof BEST_SELLING_PRODUCTS_REQUEST;
        payload: undefined;
      }
    | {
        type: typeof BEST_SELLING_PRODUCTS_FAIL;
        payload: string;
      }
    | {
        type: typeof BEST_SELLING_PRODUCTS_SUCCESS;
        payload: IProduct[];
      }
) => {
  switch (type) {
    case BEST_SELLING_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case BEST_SELLING_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case BEST_SELLING_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
