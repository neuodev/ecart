import {
  LATEST_PRODUCTS_REQUEST,
  LATEST_PRODUCTS_SUCCESS,
  LATEST_PRODUCTS_FAIL,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  RECOMMEND_PRODUCTS_RQUIEST,
  RECOMMEND_PRODUCTS_SUCCESS,
  RECOMMEND_PRODUCTS_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_DELETE_REVIEW_REQUEST,
  PRODUCT_DELETE_REVIEW_SUCCESS,
  PRODUCT_DELETE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_DELETE_REVIEW_RESET,
  featuredProductRequest,
  featuredProductSuccess,
  featuredProductFail,
  getBestSellingProductsErr,
  getBestSellingProductsSuc,
  getTopRatedProducsErr,
  getTopRatedProductsSuc,
  getTopRatedProducsReq,
  getBestSellingProductsReq,
} from "./actionTypes";
import axios, { AxiosError } from "axios";
import { logout } from "./user";
import { AppDispatch, GetState } from "../store";
import { PriceFilter } from "../components/searchScreen/FilterSidebar";
import { getErrMsg } from "../utils/error";

export const getFeaturedProducts =
  (limit = 5) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(featuredProductRequest());
      const { data } = await axios.get("/api/v1/products", {
        params: {
          limit,
        },
      });
      dispatch(featuredProductSuccess(data.products));
    } catch (error) {
      dispatch(featuredProductFail(getErrMsg(error)));
    }
  };

export const getTopRatedProducts =
  (limit = 3) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(getTopRatedProducsReq());
      const { data } = await axios.get("/api/v1/products", {
        params: {
          limit,
          sort: "-rating",
        },
      });
      dispatch(getTopRatedProductsSuc(data.products));
    } catch (error) {
      dispatch(getTopRatedProducsErr(getErrMsg(error)));
    }
  };
export const getBestSellingProducts =
  (limit = 3) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(getBestSellingProductsReq());
      const { data } = await axios.get("/api/v1/products", {
        params: {
          limit,
          sort: "-rating,numReviews",
        },
      });
      dispatch(getBestSellingProductsSuc(data.products));
    } catch (error) {
      dispatch(getBestSellingProductsErr(getErrMsg(error)));
    }
  };

export const getLatestProducts =
  (limit = 3) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: LATEST_PRODUCTS_REQUEST });
      const { data } = await axios.get("/api/v1/products", {
        params: {
          limit,
          sort: "-createdAt",
        },
      });
      dispatch({ type: LATEST_PRODUCTS_SUCCESS, payload: data.products });
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: LATEST_PRODUCTS_FAIL,
          payload:
            error.response && error.response.data.error
              ? error.response.data.error
              : error.message,
        });
      }
    }
  };

export const searchProducts =
  ({
    q,
    category,
    price,
    sort,
    brand,
    page,
    limit,
  }: {
    q: string | null;
    category: string | null;
    price: PriceFilter | null;
    sort: string | null;
    brand: string | null;
    page: number;
    limit: number;
  }) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: SEARCH_PRODUCTS_REQUEST });
      const params: {
        [key: string]: string | number | null;
      } = {
        q,
        category,
        brand,
        sort,
        limit,
        page,
      };

      if (price !== null) {
        price.forEach((p) => {
          params[p.key] = p.value;
        });
      }

      const { data } = await axios.get("/api/v1/products", {
        params,
      });
      console.log({ data });
      dispatch({ type: SEARCH_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: SEARCH_PRODUCTS_FAIL,
          payload:
            error.response && error.response.data.error
              ? error.response.data.error
              : error.message,
        });
      }
    }
  };

export const getProductAction =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: GET_PRODUCT_REQUEST });
      let url = `/api/v1/products/${id}`;
      const { data } = await axios.get(url);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
      dispatch({ type: PRODUCT_DELETE_REVIEW_RESET });
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: GET_PRODUCT_FAIL,
          payload:
            error.response && error.response.data.error
              ? error.response.data.error
              : error.message,
        });
      }
    }
  };

export const recommend = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: RECOMMEND_PRODUCTS_RQUIEST });
    let url = "/api/v1/products";
    const { data } = await axios.get(url, {
      params: {
        limit: 3,
        sort: "-name",
        "rating[gte]": 4,
      },
    });
    dispatch({ type: RECOMMEND_PRODUCTS_SUCCESS, payload: data.products });
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatch({
        type: RECOMMEND_PRODUCTS_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  }
};

export const createProductReview =
  (productId: string, review: {}) =>
  async (dispatch: AppDispatch, getState: GetState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      await axios.post(`/api/v1/products/${productId}/reviews`, review, config);

      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
        payload: undefined,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message;

        if (message === "Not authorized, token failed") {
          logout()(dispatch);
        }

        dispatch({
          type: PRODUCT_CREATE_REVIEW_FAIL,
          payload: message,
        });
      }
    }
  };

export const deleteProductReview =
  () => async (dispatch: AppDispatch, getState: GetState) => {
    try {
      dispatch({
        type: PRODUCT_DELETE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const { product } = getState().product;
      const productId = product?._id;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      await axios.delete(`/api/v1/products/${productId}/reviews`, config);

      dispatch({
        type: PRODUCT_DELETE_REVIEW_SUCCESS,
        payload: undefined,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message;

        if (message === "Not authorized, token failed") {
          logout()(dispatch);
        }

        dispatch({
          type: PRODUCT_DELETE_REVIEW_FAIL,
          payload: message,
        });
      }
    }
  };
