import axios from "axios";
import { LOCAL_STORAGE } from "../constants";
import { AppDispatch, GetState } from "../store";
import { ShippingAddr, ShippingMethod } from "../types";
import { getErrMsg } from "../utils/error";
import {
  addCartItem,
  delCartItem,
  savePayment,
  saveShippingAddr,
  saveShippingMethodAction,
} from "./actionTypes";

export const addToCart =
  (id: string, qty: number) =>
  async (dispatch: AppDispatch, getState: GetState) => {
    try {
      const { data } = await axios.get(`/api/v1/products/${id}`);
      dispatch(
        addCartItem({
          product: data._id,
          name: data.name,
          price: data.price,
          discount: data.discount,
          image: data.images[0],
          qty,
          rating: data.rating,
        })
      );

      localStorage.setItem(
        LOCAL_STORAGE.cartItems,
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {
      const err = getErrMsg(error);
      // todo: Should be handled by the UI
      alert(err);
    }
  };

export const removeFromCart =
  (id: string) => (dispatch: AppDispatch, getState: GetState) => {
    dispatch(delCartItem(id));
    localStorage.setItem(
      LOCAL_STORAGE.cartItems,
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const saveShippingAddress =
  (addr: ShippingAddr) => (dispatch: AppDispatch) => {
    dispatch(saveShippingAddr(addr));
    if (addr.save === true) {
      localStorage.setItem(LOCAL_STORAGE.shippingAddr, JSON.stringify(addr));
    }
  };

export const savePaymentMethod =
  (method: string) => (dispatch: AppDispatch) => {
    dispatch(savePayment(method));
    localStorage.setItem(LOCAL_STORAGE.paymentMethod, JSON.stringify(method));
  };

export const saveShippingMethod =
  (method: ShippingMethod) => (dispatch: AppDispatch) => {
    dispatch(saveShippingMethodAction(method));

    localStorage.setItem(LOCAL_STORAGE.shippingMethod, JSON.stringify(method));
  };
