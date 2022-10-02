import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { useDispatch } from "react-redux";
import { LOCAL_STORAGE } from "./constants";
import { ICartItem, IUser } from "./types";

const cartItems = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE.cartItem) || "[]"
) as ICartItem[];
const shippingAddress = JSON.parse(
  LOCAL_STORAGE.userInfo || "null"
) as {} | null;

const userInfo = JSON.parse(LOCAL_STORAGE.shippingAddr || "null") as
  | (IUser & { token: string })
  | null;

const initalState = {
  cart: {
    cartItems,
    shippingAddress,
    paymentMethod: null,
    shippingMethod: null,
  },
  userLogin: { userInfo, loading: false, error: null },
};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  preloadedState: initalState,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
