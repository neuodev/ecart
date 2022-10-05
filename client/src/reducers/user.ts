import { createReducer } from "@reduxjs/toolkit";
import {
  userLoginReq,
  userLoginSuc,
  userLoginErr,
  userLoginReset,
  userRegisterReq,
  userRegisterSuc,
  userRegisterErr,
  userLogout,
} from "../actions/actionTypes";
import { BaseAction, BaseState, IUser } from "../types";

type UserInfo = BaseState<{
  userInfo: (IUser & { token: string }) | null;
}>;

let initState: UserInfo = {
  loading: false,
  error: null,
  userInfo: null,
};

export const userLoginReducer = createReducer<UserInfo>(
  { ...initState },
  (builder) => {
    builder
      .addCase(userLoginReq, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(userLoginSuc, (state, { payload }) => ({
        ...state,
        loading: false,
        userInfo: payload,
      }))
      .addCase(userLoginErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(userLoginReset, () => ({
        ...initState,
      }));
  }
);

export const userRegisterReducer = createReducer<UserInfo>(
  { ...initState },
  (builder) => {
    builder
      .addCase(userRegisterReq, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(userRegisterSuc, (state, { payload }) => ({
        ...state,
        loading: false,
        userInfo: payload,
      }))
      .addCase(userRegisterErr, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(userLogout, () => ({
        ...initState,
      }));
  }
);
