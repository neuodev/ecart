import axios, { AxiosError } from "axios";
import { LOCAL_STORAGE } from "../constants";
import { AppDispatch, GetState } from "../store";
import {
  ICartItem,
  IPaymentResult,
  ShippingAddr,
  ShippingMethod,
} from "../types";
import {
  CART_CLEAR_ITEMS,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_LIST_FAIL,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
} from "./actionTypes";
import { logout } from "./user";

export const createOrder =
  (order: {
    orderItems: ICartItem[];
    shippingAddress: ShippingAddr;
    shippingMethod: ShippingMethod;
    itemsPrice: number;
    shippingPrice: number;
    taxPrice: number;
    totalPrice: number;
  }) =>
  async (dispatch: AppDispatch, getState: GetState) => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      const { data } = await axios.post(`/api/v1/orders`, order, config);

      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      });

      localStorage.removeItem(LOCAL_STORAGE.cartItems);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message;

        if (message === "Not authorized, token failed") {
          logout()(dispatch);
        }

        dispatch({
          type: ORDER_CREATE_FAIL,
          payload: message,
        });
      }
    }
  };

export const payOrder =
  (orderId: string, paymentResult: IPaymentResult) =>
  async (dispatch: AppDispatch, getState: GetState) => {
    try {
      dispatch({
        type: ORDER_PAY_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/v1/orders/${orderId}/pay`,
        paymentResult,
        config
      );

      dispatch({
        type: ORDER_PAY_SUCCESS,
        payload: data,
      });
      dispatch({
        type: CART_CLEAR_ITEMS,
        payload: data,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message;

        if (message === "Not authorized, token failed") {
          logout()(dispatch);
        }

        dispatch({
          type: ORDER_PAY_FAIL,
          payload: message,
        });
      }
    }
  };

export const listMyOrders =
  () => async (dispatch: AppDispatch, getState: GetState) => {
    try {
      dispatch({
        type: ORDER_LIST_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      const { data } = await axios.get(`/api/v1/orders/myorders`, config);

      dispatch({
        type: ORDER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message;
        if (message === "Not authorized, token failed") {
          logout()(dispatch);
        }
        dispatch({
          type: ORDER_LIST_FAIL,
          payload: message,
        });
      }
    }
  };

export const listOrders =
  () => async (dispatch: AppDispatch, getState: GetState) => {
    try {
      dispatch({
        type: ORDER_LIST_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      const { data } = await axios.get(`/api/orders`, config);

      dispatch({
        type: ORDER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;

        if (message === "Not authorized, token failed") {
          logout()(dispatch);
        }

        dispatch({
          type: ORDER_LIST_FAIL,
          payload: message,
        });
      }
    }
  };
