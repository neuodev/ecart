import {
  BEST_SELLING_PRODUCTS_REQUEST,
  BEST_SELLING_PRODUCTS_SUCCESS,
  BEST_SELLING_PRODUCTS_FAIL,
} from '../actions/actionTypes';

export const bestSellingProducts = (
  state = { products: [] },
  { payload, type }
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
