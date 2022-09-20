import {
  TOP_RATED_PRODUCTS_REQUEST,
  TOP_RATED_PRODUCTS_SUCCESS,
  TOP_RATED_PRODUCTS_FAIL,
} from '../actions/actionTypes';

export const topRatedProducts = (
  state = { products: [] },
  { payload, type }
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
