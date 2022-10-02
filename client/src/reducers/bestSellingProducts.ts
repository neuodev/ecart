import {
  BEST_SELLING_PRODUCTS_REQUEST,
  BEST_SELLING_PRODUCTS_SUCCESS,
  BEST_SELLING_PRODUCTS_FAIL,
} from "../actions/actionTypes";
import { BaseAction, BaseState, IProduct } from "../types";

type State = BaseState<{
  products: IProduct[];
}>;

export function bestSellingProducts(
  state: State = { products: [], loading: false, error: null },
  {
    payload,
    type,
  }: BaseAction<
    IProduct[],
    typeof BEST_SELLING_PRODUCTS_REQUEST,
    typeof BEST_SELLING_PRODUCTS_SUCCESS,
    typeof BEST_SELLING_PRODUCTS_FAIL
  >
): State {
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
}
