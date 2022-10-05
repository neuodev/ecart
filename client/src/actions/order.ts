import axios, { AxiosError } from "axios";
import { LOCAL_STORAGE } from "../constants";
import { AppDispatch, GetState } from "../store";
import {
  ICartItem,
  IPaymentResult,
  ShippingAddr,
  ShippingMethod,
} from "../types";
import { getErrMsg } from "../utils/error";
import {
  clearCart,
  createOrderErr,
  createOrderReq,
  createOrderSuc,
  getOrderReq,
  getOrdersListErr,
  getOrdersListReq,
  getOrdersListSuc,
  getOrderSuc,
  payOrderErr,
  payOrderReq,
  payOrderSuc,
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
      dispatch(createOrderReq());
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

      dispatch(createOrderSuc(data));
      localStorage.removeItem(LOCAL_STORAGE.cartItems);
    } catch (error) {
      let errMsg = getErrMsg(error);
      dispatch(createOrderErr(errMsg));
      if (errMsg.toLowerCase().includes("not authorized")) {
        dispatch(logout());
      }
    }
  };

export const payOrder =
  (orderId: string, paymentResult: IPaymentResult) =>
  async (dispatch: AppDispatch, getState: GetState) => {
    try {
      dispatch(payOrderReq());

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      await axios.put(`/api/v1/orders/${orderId}/pay`, paymentResult, config);

      dispatch(payOrderSuc());
      dispatch(clearCart());
    } catch (error) {
      let errMsg = getErrMsg(error);
      dispatch(payOrderErr(errMsg));
      if (errMsg.toLowerCase().includes("not authorized")) {
        dispatch(logout());
      }
    }
  };

export const listMyOrders =
  () => async (dispatch: AppDispatch, getState: GetState) => {
    try {
      dispatch(getOrdersListReq());

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      const { data } = await axios.get(`/api/v1/orders/myorders`, config);
      dispatch(getOrdersListSuc(data));
    } catch (error) {
      let errMsg = getErrMsg(error);
      dispatch(getOrdersListErr(errMsg));
      if (errMsg.toLowerCase().includes("not authorized")) {
        dispatch(logout());
      }
    }
  };
