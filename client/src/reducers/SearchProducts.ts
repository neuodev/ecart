import {
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAIL,
  RECOMMEND_PRODUCTS_RQUIEST,
  RECOMMEND_PRODUCTS_SUCCESS,
  RECOMMEND_PRODUCTS_FAIL,
} from "../actions/actionTypes";
import { BaseAction, BaseState, IProduct } from "../types";

type Search = BaseState<{
  products: IProduct[];
  count: number;
}>;

export function searchProducts(
  state: Search = { products: [], count: 0, loading: false, error: null },
  {
    payload,
    type,
  }: BaseAction<
    {
      products: IProduct[];
      count: number;
    },
    typeof SEARCH_PRODUCTS_REQUEST,
    typeof SEARCH_PRODUCTS_SUCCESS,
    typeof SEARCH_PRODUCTS_FAIL
  >
): Search {
  switch (type) {
    case SEARCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload.products,
        count: payload.count,
      };
    case SEARCH_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}

export const recommendedProducts = (
  state: BaseState<{ products: IProduct[] }> = {
    loading: false,
    error: null,
    products: [],
  },
  {
    payload,
    type,
  }: BaseAction<
    {
      products: IProduct[];
      count: number;
    },
    typeof RECOMMEND_PRODUCTS_RQUIEST,
    typeof RECOMMEND_PRODUCTS_SUCCESS,
    typeof RECOMMEND_PRODUCTS_FAIL
  >
) => {
  switch (type) {
    case RECOMMEND_PRODUCTS_RQUIEST:
      return {
        ...state,
        loading: true,
      };
    case RECOMMEND_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: payload,
      };
    case RECOMMEND_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
