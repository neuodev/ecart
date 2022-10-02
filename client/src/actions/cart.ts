import axios from "axios";
import { LOCAL_STORAGE } from "../constants";
import { AppDispatch, GetState } from "../store";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_METHOD,
} from "./actionTypes";

export const addToCart =
  (id: string, qty: number) =>
  async (dispatch: AppDispatch, getState: GetState) => {
    const { data } = await axios.get(`/api/v1/products/${id}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        price: data.price,
        countInStock: data.countInStock,
        discount: data.discount,
        image: data.images[0],
        qty,
        rating: data.rating,
      },
    });

    localStorage.setItem(
      LOCAL_STORAGE.cartItems,
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeFromCart =
  (id: string) => (dispatch: AppDispatch, getState: GetState) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });

    localStorage.setItem(
      LOCAL_STORAGE.cartItems,
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const saveShippingAddress =
  (data: { save: boolean }) => (dispatch: AppDispatch) => {
    dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    });

    if (data.save === true) {
      localStorage.setItem(LOCAL_STORAGE.shippingAddr, JSON.stringify(data));
    }
  };

export const savePaymentMethod = (data: {}) => (dispatch: AppDispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem(LOCAL_STORAGE.paymentMethod, JSON.stringify(data));
};

export const saveShippingMethod = (data: {}) => (dispatch: AppDispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_METHOD,
    payload: data,
  });

  localStorage.setItem(LOCAL_STORAGE.shippingMethod, JSON.stringify(data));
};
