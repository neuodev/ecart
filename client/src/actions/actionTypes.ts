import { createAction } from "@reduxjs/toolkit";
import { IProduct } from "../types";

export const featuredProductReq = createAction("featured/req");
export const featuredProductSuc = createAction<IProduct[]>("featured/success");
export const featuredProductErr = createAction<string>("featured/error");

export const getTopRatedProducsReq = createAction("top-rated/req");
export const getTopRatedProductsSuc =
  createAction<IProduct[]>("top-rated/success");
export const getTopRatedProducsErr = createAction<string>("top-rated/fail");

export const getBestSellingProductsReq = createAction("best-selling/req");
export const getBestSellingProductsSuc = createAction<IProduct[]>(
  "best-selling/success"
);
export const getBestSellingProductsErr =
  createAction<string>("best-selling/error");

export const getLatestProductsReq = createAction("lates-products/req");
export const getLatestProductsSuc = createAction<IProduct[]>(
  "latest-products/success"
);
export const getLatestProductsErr = createAction<string>(
  "latest-products/error"
);

export const searchProductReq = createAction("search/req");
export const searchProductsSuc = createAction<IProduct[]>("search/success");
export const searchProductErr = createAction<string>("search/error");

export const sortAsc = createAction("filter/sort-asc");
export const sortDesc = createAction("filter/sort-desc");
export const filterByCat = createAction("filter/cat");
export const filterByPrice = createAction("filter/price");
export const filterByBrand = createAction("filter/brand");
export const resetFilters = createAction("filter/reset");

export const getProductReq = createAction("product/req");
export const getProductSuc = createAction("product/success");
export const getProductErr = createAction("product/error");

export const addCartItemAction = createAction("cart/add");
export const delCartItemAction = createAction("cart/del");
export const saveShippingAddr = createAction("cart/save-shipping-addr");
export const savePayment = createAction("cart/save-payment");
export const saveShippingMethod = createAction("cart/save-shipping-method");
export const clearCart = createAction("cart/clear");

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
