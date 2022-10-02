import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { useDispatch } from "react-redux";
import { LOCAL_STORAGE } from "./constants";

const cartItems = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE.cartItem) || "[]"
);
const shippingAddress = JSON.parse(LOCAL_STORAGE.userInfo || "null");
const userInfo = JSON.parse(LOCAL_STORAGE.shippingAddr || "null");

const initalState = {
  cart: {
    cartItems,
    shippingAddress,
  },
  userLogin: { userInfo },
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
