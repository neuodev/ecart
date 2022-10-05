import { createReducer } from "@reduxjs/toolkit";
import {
  createOrderReq,
  createOrderSuc,
  createOrderErr,
  createOrderReset,
  payOrderReq,
  payOrderSuc,
  payOrderErr,
  payOrderReset,
  getOrdersListReq,
  getOrdersListSuc,
  getOrdersListErr,
} from "../actions/actionTypes";
import { BaseState, IOrder } from "../types";

type CreateOrder = BaseState<{
  order: IOrder | null;
  success: boolean;
}>;

const orderInitState: CreateOrder = {
  loading: false,
  success: false,
  order: null,
  error: null,
};

export const orderCreateReducer = createReducer<CreateOrder>(
  {
    ...orderInitState,
  },
  (builder) => {
    builder
      .addCase(createOrderReq, (state) => ({ ...state, loading: true }))
      .addCase(createOrderSuc, (state, { payload }) => ({
        ...state,
        loading: false,
        success: true,
        order: payload,
      }))
      .addCase(createOrderErr, (state, { payload }) => ({
        loading: false,
        success: false,
        order: null,
        error: payload,
      }))
      .addCase(createOrderReset, (state, { payload }) => ({
        ...orderInitState,
      }));
  }
);

type OrderPay = BaseState<{
  success: boolean;
}>;

let payOrderInitState: OrderPay = {
  loading: false,
  error: null,
  success: false,
};

export const orderPayReducer = createReducer<OrderPay>(
  { ...payOrderInitState },
  (builder) => {
    builder
      .addCase(payOrderReq, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(payOrderSuc, (state) => ({
        ...state,
        loading: false,
        success: true,
      }))
      .addCase(payOrderErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(payOrderReset, () => ({
        ...payOrderInitState,
      }));
  }
);

type OrdersList = BaseState<{ orders: IOrder[] }>;

export const orderListReducer = createReducer<OrdersList>(
  {
    orders: [],
    loading: false,
    error: null,
  },
  (builder) => {
    builder
      .addCase(getOrdersListReq, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getOrdersListSuc, (state, { payload }) => ({
        ...state,
        loading: false,
        orders: payload,
      }))
      .addCase(getOrdersListErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  }
);
