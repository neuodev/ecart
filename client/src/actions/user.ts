import axios from "axios";
import { LOCAL_STORAGE } from "../constants";
import { AppDispatch } from "../store";
import { getErrMsg } from "../utils/error";
import {
  userLoginErr,
  userLoginReq,
  userLoginSuc,
  userLogout,
  userRegisterErr,
  userRegisterReq,
  userRegisterSuc,
} from "./actionTypes";

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userLoginReq());

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/v1/users/login",
        { email, password },
        config
      );

      dispatch(userLoginSuc(data));

      localStorage.setItem(LOCAL_STORAGE.userInfo, JSON.stringify(data));
    } catch (error) {
      dispatch(userLoginErr(getErrMsg(error)));
    }
  };

export const logout = () => (dispatch: AppDispatch) => {
  Object.values(LOCAL_STORAGE).forEach((key) => {
    localStorage.removeItem(key);
  });

  dispatch(userLogout());
  document.location.href = "/login";
};

export type UserRegister = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const register =
  (info: UserRegister) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userRegisterReq());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post("/api/v1/users", info, config);
      dispatch(userRegisterSuc(data));

      localStorage.setItem(LOCAL_STORAGE.userInfo, JSON.stringify(data));
    } catch (error) {
      dispatch(userRegisterErr(getErrMsg(error)));
    }
  };
