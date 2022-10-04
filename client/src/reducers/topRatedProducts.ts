import { createReducer } from "@reduxjs/toolkit";
import {
  getTopRatedProducsReq,
  getTopRatedProductsSuc,
  getTopRatedProducsErr,
} from "../actions/actionTypes";
import { BaseState, IProduct } from "../types";

type TopRated = BaseState<{
  products: IProduct[];
}>;

export const topRatedProducts = createReducer<TopRated>(
  { products: [], loading: false, error: null },
  (builder) => {
    builder
      .addCase(getTopRatedProducsReq, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getTopRatedProductsSuc, (state, { payload }) => ({
        ...state,
        loading: false,
        error: null,
        products: payload,
      }))
      .addCase(getTopRatedProducsErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  }
);
