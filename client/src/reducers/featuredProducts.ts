import { createReducer } from "@reduxjs/toolkit";
import {
  featuredProductFail,
  featuredProductRequest,
  featuredProductSuccess,
} from "../actions/actionTypes";
import { BaseState, IProduct } from "../types";

type FeaturedProducts = BaseState<{ products: IProduct[] }>;

export const featuredProducts = createReducer<FeaturedProducts>(
  {
    products: [],
    loading: false,
    error: null,
  },
  (builder) => {
    builder
      .addCase(featuredProductRequest, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(featuredProductSuccess, (state, { payload }) => {
        return {
          ...state,
          loading: false,
          products: payload,
        };
      })
      .addCase(featuredProductFail, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  }
);
