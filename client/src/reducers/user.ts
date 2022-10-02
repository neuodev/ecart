import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_RESET,
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

export function userLoginReducer(
  state: UserInfo = {
    ...initState,
  },
  action:
    | BaseAction<
        IUser & { token: string },
        typeof USER_LOGIN_REQUEST,
        typeof USER_LOGIN_SUCCESS,
        typeof USER_LOGIN_FAIL,
        typeof USER_LOGIN_RESET
      >
    | {
        type: typeof USER_LOGOUT;
      }
): UserInfo {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGOUT:
      return { ...initState };
    case USER_LOGIN_RESET:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

export function userRegisterReducer(
  state: UserInfo = { ...initState },
  action: BaseAction<
    IUser & { token: string },
    typeof USER_REGISTER_REQUEST,
    typeof USER_REGISTER_SUCCESS,
    typeof USER_REGISTER_FAIL,
    typeof USER_LOGOUT
  >
): UserInfo {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGOUT:
      return { ...initState };
    default:
      return state;
  }
}
