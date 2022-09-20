import {
  FEATURED_PRODUCTS_REQUEST,
  FEATURED_PRODUCTS_SUCCESS,
} from '../actions/actionTypes';

export const featuredProducts = (
  state = { products: [] },
  { payload, type }
) => {
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
    case FEATURED_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
