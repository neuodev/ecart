import {
  FEATURED_PRODUCTS_FAIL,
  FEATURED_PRODUCTS_REQUEST,
  FEATURED_PRODUCTS_SUCCESS,
} from "../actions/actionTypes";
import { BaseAction, BaseState, IProduct } from "../types";

type FeaturedProducts = BaseState<{ products: IProduct[] }>;

export function featuredProducts(
  state: FeaturedProducts = {
    products: [],
    loading: false,
    error: null,
  },
  {
    payload,
    type,
  }: BaseAction<
    IProduct[],
    typeof FEATURED_PRODUCTS_REQUEST,
    typeof FEATURED_PRODUCTS_SUCCESS,
    typeof FEATURED_PRODUCTS_FAIL
  >
) {
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
}
