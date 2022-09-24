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

export const searchProducts = (state = { products: [] }, { payload, type }) => {
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

export const recommendProducts = (state = {}, { payload, type }) => {
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
