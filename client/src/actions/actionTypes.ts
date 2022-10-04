import { createAction } from "@reduxjs/toolkit";
import { IProduct } from "../types";

export const FEATURED_PRODUCTS_REQUEST = "FEATURED_PRODUCTS_REQUEST";
export const FEATURED_PRODUCTS_SUCCESS = "FEATURED_PRODUCTS_SUCCESS";
export const FEATURED_PRODUCTS_FAIL = "FEATURED_PRODUCTS_FAIL";

export const featuredProductRequest = createAction("featured/req");
export const featuredProductSuccess =
  createAction<IProduct[]>("featured/success");
export const featuredProductFail = createAction<string>("featured/fail");

export const TOP_RATED_PRODUCTS_REQUEST = "TOP_RATED_PRODUCTS_REQUEST";
export const TOP_RATED_PRODUCTS_SUCCESS = "TOP_RATED_PRODUCTS_SUCCESS";
export const TOP_RATED_PRODUCTS_FAIL = "TOP_RATED_PRODUCTS_FAIL";

export const BEST_SELLING_PRODUCTS_REQUEST = "BEST_SELLING_PRODUCTS_REQUEST";
export const BEST_SELLING_PRODUCTS_SUCCESS = "BEST_SELLING_PRODUCTS_SUCCESS";
export const BEST_SELLING_PRODUCTS_FAIL = "BEST_SELLING_PRODUCTS_FAIL";

export const LATEST_PRODUCTS_REQUEST = "LATEST_PRODUCTS_REQUEST";
export const LATEST_PRODUCTS_SUCCESS = "LATEST_PRODUCTS_SUCCESS";
export const LATEST_PRODUCTS_FAIL = "LATEST_PRODUCTS_FAIL";

export const SEARCH_PRODUCTS_REQUEST = "SEARCH_PRODUCTS_REQUEST";
export const SEARCH_PRODUCTS_SUCCESS = "SEARCH_PRODUCTS_SUCCESS";
export const SEARCH_PRODUCTS_FAIL = "SEARCH_PRODUCTS_FAIL";

export const ASCENDING_ORDER = "ASCENDING_ORDER";
export const DECENDING_ORDER = "DECENDING_ORDER";
export const CATEGORY = "CATEGORY";
export const PRICE = "PRICE";
export const BRAND = "BRAND";
export const RESET_FILTERS = "RESET_FILTERS";

export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";

export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS";
export const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD";
export const CART_CLEAR_ITEMS = "CART_CLEAR_ITEMS";
export const CART_SAVE_SHIPPING_METHOD = "CART_SAVE_SHIPPING_METHOD";

export const USER_DETAILS_FAIL = "USER_DETAILS_FAIL";
export const USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";

export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_RESET = "USER_LOGIN_RESET";

export const USER_LOGOUT = "USER_LOGOUT";

export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";

export const USER_UPDATE_PROFILE_FAIL = "USER_UPDATE_PROFILE_FAIL";
export const USER_UPDATE_PROFILE_REQUEST = "USER_UPDATE_PROFILE_REQUEST";
export const USER_UPDATE_PROFILE_SUCCESS = "USER_UPDATE_PROFILE_SUCCESS";

export const USER_DETAILS_RESET = "USER_DETAILS_RESET";

export const USER_LIST_FAIL = "USER_LIST_FAIL";
export const USER_LIST_SUCCESS = "USER_LIST_SUCCESS";
export const USER_LIST_REQUEST = "USER_LIST_REQUEST";
export const USER_LIST_RESET = "USER_LIST_RESET";

export const USER_DELETE_REQUEST = "USER_DELETE_REQUEST";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_FAIL = "USER_DELETE_FAIL";

export const USER_UPDATE_FAIL = "USER_UPDATE_FAIL";
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST";

export const USER_UPDATE_PROFILE_RESET = "USER_UPDATE_PROFILE_RESET";
export const USER_UPDATE_RESET = "USER_UPDATE_RESET";

export const RECOMMEND_PRODUCTS_RQUIEST = "RECOMMEND_PRODUCTS_RQUIEST";
export const RECOMMEND_PRODUCTS_SUCCESS = "RECOMMEND_PRODUCTS_SUCCESS";
export const RECOMMEND_PRODUCTS_FAIL = "RECOMMEND_PRODUCTS_FAIL";

export const ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST";
export const ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS";
export const ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL";
export const ORDER_CREATE_RESET = "ORDER_CREATE_RESET";

export const ORDER_DETAILS_FAIL = "ORDER_DETAILS_FAIL";
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";
export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";

export const ORDER_PAY_FAIL = "ORDER_PAY_FAIL";
export const ORDER_PAY_SUCCESS = "ORDER_PAY_SUCCESS";
export const ORDER_PAY_REQUEST = "ORDER_PAY_REQUEST";
export const ORDER_PAY_RESET = "ORDER_PAY_RESET";

export const ORDER_LIST_FAIL = "ORDER_LIST_FAIL";
export const ORDER_LIST_SUCCESS = "ORDER_LIST_SUCCESS";
export const ORDER_LIST_REQUEST = "ORDER_LIST_REQUEST";

export const ORDER_DELIVER_RESET = "ORDER_DELIVER_RESET";
export const ORDER_DELIVER_FAIL = "ORDER_DELIVER_FAIL";
export const ORDER_DELIVER_SUCCESS = "ORDER_DELIVER_SUCCESS";
export const ORDER_DELIVER_REQUEST = "ORDER_DELIVER_REQUEST";

export const PRODUCT_CREATE_REVIEW_REQUEST = "PRODUCT_CREATE_REVIEW_REQUEST";
export const PRODUCT_CREATE_REVIEW_SUCCESS = "PRODUCT_CREATE_REVIEW_SUCCESS";
export const PRODUCT_CREATE_REVIEW_FAIL = "PRODUCT_CREATE_REVIEW_FAIL";
export const PRODUCT_CREATE_REVIEW_RESET = "PRODUCT_CREATE_REVIEW_RESET";

export const PRODUCT_DELETE_REVIEW_REQUEST = "PRODUCT_DELETE_REVIEW_REQUEST";
export const PRODUCT_DELETE_REVIEW_SUCCESS = "PRODUCT_DELETE_REVIEW_SUCCESS";
export const PRODUCT_DELETE_REVIEW_FAIL = "PRODUCT_DELETE_REVIEW_FAIL";
export const PRODUCT_DELETE_REVIEW_RESET = "PRODUCT_DELETE_REVIEW_RESET";

export const TOGGLE_WISHLIST_ITEM = "TOGGLE_WISHLIST_ITEM";
export const CLEAR_WISHLIST = "CLEAR_WISHLIST ";

export const PRODUCTS_NEXT_PAGE_REQUREST = "PRODUCTS_NEXT_PAGE_REQUREST";
export const PRODUCTS_NEXT_PAGE_SUCCESS = "PRODUCTS_NEXT_PAGE_SUCCESS";
export const PRODUCTS_NEXT_PAGE_FAIL = "PRODUCTS_NEXT_PAGE_FAIL";

export const ITEMS_LIMIT = "ITEMS_LIMIT";
