import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_RESET,
  ORDER_LIST_FAIL,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_RESET,
  ORDER_CREATE_RESET,
} from "../actions/actionTypes";
import { BaseAction, BaseState, IOrder } from "../types";

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

export function orderCreateReducer(
  state = {
    ...orderInitState,
  },
  action: BaseAction<
    IOrder,
    typeof ORDER_CREATE_REQUEST,
    typeof ORDER_CREATE_SUCCESS,
    typeof ORDER_CREATE_FAIL,
    typeof ORDER_CREATE_RESET
  >
): CreateOrder {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ORDER_CREATE_RESET:
      return {
        ...orderInitState,
      };
    default:
      return state;
  }
}

type OrderPay = BaseState<{
  success: boolean;
}>;

let initState: OrderPay = {
  loading: false,
  error: null,
  success: false,
};

export function orderPayReducer(
  state: OrderPay = { ...initState },
  action: BaseAction<
    undefined,
    typeof ORDER_PAY_REQUEST,
    typeof ORDER_PAY_SUCCESS,
    typeof ORDER_PAY_FAIL,
    typeof ORDER_PAY_RESET
  >
): OrderPay {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return { ...initState };
    default:
      return state;
  }
}

let orderDeliverState: BaseState<{
  success: boolean;
}> = {
  loading: false,
  error: null,
  success: false,
};
export const orderDeliverReducer = (
  state = orderDeliverState,
  action: BaseAction<
    undefined,
    typeof ORDER_DELIVER_REQUEST,
    typeof ORDER_DELIVER_SUCCESS,
    typeof ORDER_DELIVER_FAIL,
    typeof ORDER_DELIVER_RESET
  >
) => {
  switch (action.type) {
    case ORDER_DELIVER_REQUEST:
      return {
        loading: true,
      };
    case ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_DELIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_DELIVER_RESET:
      return {};
    default:
      return state;
  }
};

type OrdersList = BaseState<{ orders: IOrder[] }>;

export function orderListReducer(
  state: OrdersList = {
    orders: [],
    loading: false,
    error: null,
  },
  action: BaseAction<
    IOrder[],
    typeof ORDER_LIST_REQUEST,
    typeof ORDER_LIST_SUCCESS,
    typeof ORDER_LIST_FAIL
  >
): OrdersList {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case ORDER_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
