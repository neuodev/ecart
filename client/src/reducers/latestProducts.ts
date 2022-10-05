import { createReducer } from "@reduxjs/toolkit";
import {
  getLatestProductsReq,
  getLatestProductsSuc,
  getLatestProductsErr,
} from "../actions/actionTypes";
import { BaseState, IProduct } from "../types";

type LatestProducts = BaseState<{
  products: IProduct[];
}>;

export const latestProducts = createReducer<LatestProducts>(
  { products: [], loading: false, error: null },
  (builder) => {
    builder
      .addCase(getLatestProductsReq, (state) => ({ ...state, loading: true }))
      .addCase(getLatestProductsSuc, (state, { payload }) => ({
        ...state,
        products: payload,
      }))
      .addCase(getLatestProductsErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  }
);
