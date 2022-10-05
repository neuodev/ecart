import { createReducer } from "@reduxjs/toolkit";
import {
  featuredProductErr,
  featuredProductReq,
  featuredProductSuc,
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
      .addCase(featuredProductReq, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(featuredProductSuc, (state, { payload }) => {
        return {
          ...state,
          loading: false,
          products: payload,
        };
      })
      .addCase(featuredProductErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  }
);
