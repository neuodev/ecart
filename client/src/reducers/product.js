import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_DELETE_REVIEW_FAIL,
  PRODUCT_DELETE_REVIEW_REQUEST,
  PRODUCT_DELETE_REVIEW_RESET,
  PRODUCT_DELETE_REVIEW_SUCCESS,
} from "../actions/actionTypes";

export const getProduct = (
  state = {
    loading: false,
    error: null,
    product: null,
  },
  { type, payload }
) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: payload,
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const initState = {
  loading: false,
  success: false,
  error: null,
};

export const productReviewCreateReducer = (
  state = { ...initState },
  action
) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return { ...initState };
    default:
      return state;
  }
};

export const productReviewDeleteReducer = (
  state = { ...initState },
  action
) => {
  switch (action.type) {
    case PRODUCT_DELETE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_DELETE_REVIEW_RESET:
      return { ...initState };
    default:
      return state;
  }
};
