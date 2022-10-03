import axios, { Axios, AxiosError } from "axios";
import { LOCAL_STORAGE } from "../constants";
import { AppDispatch, GetState } from "../store";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "./actionTypes";

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

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

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem(LOCAL_STORAGE.userInfo, JSON.stringify(data));
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload:
            error.response && error.response.data.error
              ? error.response.data.error
              : error.message,
        });
      }
    }
  };

export const logout = () => (dispatch: AppDispatch) => {
  Object.values(LOCAL_STORAGE).forEach((key) => {
    localStorage.removeItem(key);
  });

  dispatch({ type: USER_LOGOUT });
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
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post("/api/v1/users", info, config);

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem(LOCAL_STORAGE.userInfo, JSON.stringify(data));
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload:
            error.response && error.response.data.error
              ? error.response.data.error
              : error.message,
        });
      }
    }
  };
