import {
  LATEST_PRODUCTS_REQUEST,
  LATEST_PRODUCTS_SUCCESS,
  LATEST_PRODUCTS_FAIL,
} from '../actions/actionTypes';

export const latestProducts = (state = { products: [] }, { payload, type }) => {
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
};
