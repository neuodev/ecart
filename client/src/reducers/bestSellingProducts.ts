import { createReducer } from "@reduxjs/toolkit";
import {
  getBestSellingProductsReq,
  getBestSellingProductsSuc,
  getBestSellingProductsErr,
} from "../actions/actionTypes";
import { BaseState, IProduct } from "../types";

type BestSelling = BaseState<{
  products: IProduct[];
}>;

export const bestSellingProducts = createReducer<BestSelling>(
  { products: [], loading: false, error: null },
  (builder) => {
    builder
      .addCase(getBestSellingProductsReq, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getBestSellingProductsSuc, (state, { payload }) => ({
        ...state,
        loading: false,
        error: null,
        products: payload,
      }))
      .addCase(getBestSellingProductsErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  }
);
