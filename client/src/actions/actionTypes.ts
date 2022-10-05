import { createAction } from "@reduxjs/toolkit";
import { PriceFilter } from "../components/searchScreen/FilterSidebar";
import {
  ICartItem,
  IOrder,
  IProduct,
  IUser,
  ShippingAddr,
  ShippingMethod,
} from "../types";

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
export const searchProductsSuc = createAction<{
  products: IProduct[];
  count: number;
}>("search/success");
export const searchProductErr = createAction<string>("search/error");

export const sortAsc = createAction("filter/sort-asc");
export const addPageLimit = createAction<number>("filter/limit");
export const sortDesc = createAction("filter/sort-desc");
export const filterByCat = createAction<string>("filter/cat");
export const filterByPrice = createAction<PriceFilter>("filter/price");
export const filterByBrand = createAction<string>("filter/brand");
export const resetFilters = createAction("filter/reset");

export const getProductReq = createAction("product/req");
export const getProductSuc = createAction<IProduct>("product/success");
export const getProductErr = createAction<string>("product/error");

export const addCartItemAction = createAction<ICartItem>("cart/add");
export const delCartItemAction = createAction<string>("cart/del");
export const saveShippingAddr = createAction<ShippingAddr>(
  "cart/save-shipping-addr"
);
export const savePayment = createAction<string>("cart/save-payment");
export const saveShippingMethod = createAction<ShippingMethod>(
  "cart/save-shipping-method"
);
export const clearCart = createAction("cart/clear");

export const getUserReq = createAction("user-info/req");
export const getUserSuc = createAction("user-info/success");
export const getUserErr = createAction("user-info/error");

export const userLoginReq = createAction("login/req");
export const userLoginSuc = createAction<IUser>("login/success");
export const userLoginErr = createAction<string>("login/error");
export const userLoginReset = createAction("login/reset");
export const userLogout = createAction("logout");

export const userRegisterReq = createAction("register/req");
export const userRegisterSuc = createAction<IUser>("register/success");
export const userRegisterErr = createAction<string>("register/error");

export const getRecommendedProdsReq = createAction("recommened-products/req");
export const getRecommendedProdsSuc = createAction<IProduct[]>(
  "recommened-products/success"
);
export const getRecommendedProdsErr = createAction<string>(
  "recommened-products/error"
);

export const createOrderReq = createAction("create-order/req");
export const createOrderSuc = createAction<IOrder>("create-order/success");
export const createOrderErr = createAction<string>("create-order/error");
export const createOrderReset = createAction<string>("create-order/reset");

export const getOrderReq = createAction("get-order/error");
export const getOrderSuc = createAction("get-order/success");
export const getOrderErr = createAction("get-order/error");

export const payOrderReq = createAction("pay-order/req");
export const payOrderSuc = createAction("pay-order/success");
export const payOrderErr = createAction<string>("pay-order/error");
export const payOrderReset = createAction("pay-order/reset");

export const getOrdersListReq = createAction("get-orders/req");
export const getOrdersListSuc = createAction<IOrder[]>("get-orders/success");
export const getOrdersListErr = createAction<string>("get-orders/error");

export const addReviewReq = createAction("add-review/req");
export const addReviewSuc = createAction("add-review/success");
export const addReviewErr = createAction<string>("add-review/error");
export const addReviewReset = createAction("add-review/reset");

export const delReviewReq = createAction("del-review/req");
export const delReviewSuc = createAction("del-review/success");
export const delReviewErr = createAction<string>("del-review/error");
export const delReviewReset = createAction("del-review/reset");

export const toggleWishlistItemAction =
  createAction<IProduct>("wishlist/toggle");
export const clearWishlistAction = createAction("wishlist/clear");
