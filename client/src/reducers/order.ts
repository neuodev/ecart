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
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_FAIL,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_RESET,
  ORDER_CREATE_RESET,
} from "../actions/actionTypes";
import { BaseAction, BaseState, IOrder, IOrderItem } from "../types";

const orderInitState: {
  order: IOrder | null;
  success: boolean;
} & BaseState = {
  loading: false,
  success: false,
  order: null,
  error: null,
};

export const orderCreateReducer = (
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
) => {
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
};

export const orderDetailsReducer = (
  state: {
    orders: IOrderItem[];
    shippingAddress: {};
  } & BaseState = {
    loading: true,
    error: null,
    orders: [],
    shippingAddress: {},
  },
  action: BaseAction<
    IOrderItem,
    typeof ORDER_DETAILS_REQUEST,
    typeof ORDER_DETAILS_SUCCESS,
    typeof ORDER_DETAILS_FAIL
  >
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

let initState: {
  success: boolean;
} & BaseState = {
  loading: false,
  error: null,
  success: false,
};

export const orderPayReducer = (
  state = { ...initState },
  action: BaseAction<
    undefined,
    typeof ORDER_PAY_REQUEST,
    typeof ORDER_PAY_SUCCESS,
    typeof ORDER_PAY_FAIL,
    typeof ORDER_PAY_RESET
  >
) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return { ...initState };
    default:
      return state;
  }
};

let orderDeliverState: {
  success: boolean;
} & BaseState = {
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

export const orderListReducer = (
  state: { orders: IOrder[] } & BaseState = {
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
) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
