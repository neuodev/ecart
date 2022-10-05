import { createReducer } from "@reduxjs/toolkit";
import {
  searchProductReq,
  searchProductsSuc,
  searchProductErr,
  getRecommendedProdsReq,
  getRecommendedProdsSuc,
  getRecommendedProdsErr,
} from "../actions/actionTypes";
import { BaseState, IProduct } from "../types";

type Search = BaseState<{
  products: IProduct[];
  count: number;
}>;

export const searchProducts = createReducer<Search>(
  { products: [], count: 0, loading: false, error: null },
  (builder) => {
    builder
      .addCase(searchProductReq, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(
        searchProductsSuc,
        (state, { payload: { products, count } }) => ({
          ...state,
          loading: false,
          products,
          count,
        })
      )
      .addCase(searchProductErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  }
);

type RecommendedProducts = BaseState<{ products: IProduct[] }>;

export const recommendedProducts = createReducer<RecommendedProducts>(
  { products: [], loading: false, error: null },
  (builder) => {
    builder
      .addCase(getRecommendedProdsReq, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getRecommendedProdsSuc, (state, { payload }) => ({
        ...state,
        loading: false,
        products: payload,
      }))
      .addCase(getRecommendedProdsErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  }
);
