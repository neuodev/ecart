import {
  TOP_RATED_PRODUCTS_REQUEST,
  TOP_RATED_PRODUCTS_SUCCESS,
  TOP_RATED_PRODUCTS_FAIL,
} from "../actions/actionTypes";
import { BaseAction, BaseState, IProduct } from "../types";

type TopRated = BaseState<{
  products: IProduct[];
}>;

export const topRatedProducts = (
  state: TopRated = { products: [], loading: false, error: null },
  {
    payload,
    type,
  }: BaseAction<
    {
      products: IProduct[];
      count: number;
    },
    typeof TOP_RATED_PRODUCTS_REQUEST,
    typeof TOP_RATED_PRODUCTS_SUCCESS,
    typeof TOP_RATED_PRODUCTS_FAIL
  >
) => {
  switch (type) {
    case TOP_RATED_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TOP_RATED_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case TOP_RATED_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
