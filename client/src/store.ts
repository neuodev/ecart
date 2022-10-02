import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ICartItem, IUser } from "./types";
import { findOrNull } from "./utils";

const cartItems = findOrNull<ICartItem[]>("cartItems") || [];
const shippingAddress = findOrNull<{}>("shippingAddr");
const paymentMethod = findOrNull<{}>("paymentMethod");
const shippingMethod = findOrNull<{}>("shippingMethod");

const userInfo = findOrNull<IUser & { token: string }>("userInfo");
const initalState = {
  cart: {
    cartItems,
    shippingAddress,
    paymentMethod,
    shippingMethod,
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
export type GetState = () => RootState;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type Dispatch = ReturnType<typeof useAppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
