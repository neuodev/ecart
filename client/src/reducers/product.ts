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
import { BaseAction, BaseState, IProduct } from "../types";

type ProductDetails = BaseState<{
  product: IProduct | null;
}>;

export function getProduct(
  state: ProductDetails = {
    loading: false,
    error: null,
    product: null,
  },
  {
    type,
    payload,
  }: BaseAction<
    IProduct,
    typeof GET_PRODUCT_REQUEST,
    typeof GET_PRODUCT_SUCCESS,
    typeof GET_PRODUCT_FAIL
  >
): ProductDetails {
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
}

type Review = BaseState<{
  success: boolean;
}>;
const initState: Review = {
  loading: false,
  success: false,
  error: null,
};

export function productReviewCreateReducer(
  state = { ...initState },
  action: BaseAction<
    undefined,
    typeof PRODUCT_CREATE_REVIEW_REQUEST,
    typeof PRODUCT_CREATE_REVIEW_SUCCESS,
    typeof PRODUCT_CREATE_REVIEW_FAIL,
    typeof PRODUCT_CREATE_REVIEW_RESET
  >
): Review {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { ...state, loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return { ...initState };
    default:
      return state;
  }
}

export function productReviewDeleteReducer(
  state = { ...initState },
  action: BaseAction<
    undefined,
    typeof PRODUCT_DELETE_REVIEW_REQUEST,
    typeof PRODUCT_DELETE_REVIEW_SUCCESS,
    typeof PRODUCT_DELETE_REVIEW_FAIL,
    typeof PRODUCT_DELETE_REVIEW_RESET
  >
): Review {
  switch (action.type) {
    case PRODUCT_DELETE_REVIEW_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DELETE_REVIEW_SUCCESS:
      return { ...state, loading: false, success: true };
    case PRODUCT_DELETE_REVIEW_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_DELETE_REVIEW_RESET:
      return { ...initState };
    default:
      return state;
  }
}