import { createReducer } from "@reduxjs/toolkit";
import {
  addReviewErr,
  addReviewReq,
  addReviewReset,
  addReviewSuc,
  delReviewErr,
  delReviewReq,
  delReviewReset,
  delReviewSuc,
  getProductErr,
  getProductReq,
  getProductSuc,
} from "../actions/actionTypes";
import { BaseState, IProduct } from "../types";

type ProductDetails = BaseState<{
  product: IProduct | null;
}>;

export const getProduct = createReducer<ProductDetails>(
  {
    loading: false,
    error: null,
    product: null,
  },
  (builder) => {
    builder
      .addCase(getProductReq, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getProductSuc, (state, { payload }) => ({
        ...state,
        loading: false,
        product: payload,
      }))
      .addCase(getProductErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  }
);

type Review = BaseState<{
  success: boolean;
}>;
const initState: Review = {
  loading: false,
  success: false,
  error: null,
};

export const productReviewCreateReducer = createReducer<Review>(
  { ...initState },
  (builder) => {
    builder
      .addCase(addReviewReq, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(addReviewSuc, (state, { payload }) => ({
        ...state,
        loading: false,
        success: true,
      }))
      .addCase(addReviewErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(addReviewReset, () => ({
        ...initState,
      }));
  }
);

export const productReviewDeleteReducer = createReducer<Review>(
  { ...initState },
  (builder) => {
    builder
      .addCase(delReviewReq, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(delReviewSuc, (state) => ({
        ...state,
        loading: false,
        success: true,
      }))
      .addCase(delReviewErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(delReviewReset, () => ({
        ...initState,
      }));
  }
);
