import {
  LATEST_PRODUCTS_REQUEST,
  LATEST_PRODUCTS_SUCCESS,
  LATEST_PRODUCTS_FAIL,
} from "../actions/actionTypes";
import { BaseAction, BaseState, IProduct } from "../types";

type LatestProducts = BaseState<{
  products: IProduct[];
}>;

export function latestProducts(
  state: LatestProducts = { products: [], loading: false, error: null },
  {
    payload,
    type,
  }: BaseAction<
    IProduct[],
    typeof LATEST_PRODUCTS_REQUEST,
    typeof LATEST_PRODUCTS_SUCCESS,
    typeof LATEST_PRODUCTS_FAIL
  >
): LatestProducts {
  switch (type) {
    case LATEST_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LATEST_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case LATEST_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
