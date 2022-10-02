import {
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAIL,
  RECOMMEND_PRODUCTS_RQUIEST,
  RECOMMEND_PRODUCTS_SUCCESS,
  RECOMMEND_PRODUCTS_FAIL,
  PRODUCTS_NEXT_PAGE_REQUREST,
  PRODUCTS_NEXT_PAGE_SUCCESS,
  PRODUCTS_NEXT_PAGE_FAIL,
} from "../actions/actionTypes";
import { BaseAction, BaseState, IProduct } from "../types";

export const searchProducts = (
  state: BaseState<{
    products: IProduct[];
  }> = { products: [], loading: false, error: null },
  {
    payload,
    type,
  }:
    | BaseAction<
        {
          products: IProduct[];
          count: number;
        },
        typeof SEARCH_PRODUCTS_REQUEST,
        typeof SEARCH_PRODUCTS_SUCCESS,
        typeof SEARCH_PRODUCTS_FAIL
      >
    | BaseAction<
        {
          products: IProduct[];
          count: number;
        },
        typeof PRODUCTS_NEXT_PAGE_REQUREST,
        typeof PRODUCTS_NEXT_PAGE_SUCCESS,
        typeof PRODUCTS_NEXT_PAGE_FAIL
      >
) => {
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
    case PRODUCTS_NEXT_PAGE_REQUREST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCTS_NEXT_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case PRODUCTS_NEXT_PAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

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
