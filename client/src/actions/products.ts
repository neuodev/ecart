import {
  featuredProductReq,
  featuredProductSuc,
  featuredProductErr,
  getBestSellingProductsErr,
  getBestSellingProductsSuc,
  getTopRatedProducsErr,
  getTopRatedProductsSuc,
  getTopRatedProducsReq,
  getBestSellingProductsReq,
  getLatestProductsReq,
  getLatestProductsSuc,
  getLatestProductsErr,
  searchProductReq,
  searchProductsSuc,
  searchProductErr,
  getProductReq,
  getProductSuc,
  addReviewReset,
  delReviewReset,
  getProductErr,
  getRecommendedProdsReq,
  getRecommendedProdsSuc,
  getRecommendedProdsErr,
  addReviewReq,
  addReviewSuc,
  addReviewErr,
  delReviewReq,
  delReviewSuc,
  delReviewErr,
} from "./actionTypes";
import axios from "axios";
import { logout } from "./user";
import { AppDispatch, GetState } from "../store";
import { PriceFilter } from "../components/searchScreen/FilterSidebar";
import { getErrMsg } from "../utils/error";

export const getFeaturedProducts =
  (limit = 5) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(featuredProductReq());
      const { data } = await axios.get("/api/v1/products", {
        params: {
          limit,
        },
      });
      dispatch(featuredProductSuc(data.products));
    } catch (error) {
      dispatch(featuredProductErr(getErrMsg(error)));
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
      dispatch(getLatestProductsReq());
      const { data } = await axios.get("/api/v1/products", {
        params: {
          limit,
          sort: "-createdAt",
        },
      });
      dispatch(getLatestProductsSuc(data.products));
    } catch (error) {
      dispatch(getLatestProductsErr(getErrMsg(error)));
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
      dispatch(searchProductReq());
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

      dispatch(searchProductsSuc(data));
    } catch (error) {
      dispatch(searchProductErr(getErrMsg(error)));
    }
  };

export const getProduct = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getProductReq());

    const { data } = await axios.get(`/api/v1/products/${id}`);
    dispatch(getProductSuc(data));
    dispatch(addReviewReset());
    dispatch(delReviewReset());
  } catch (error) {
    dispatch(getProductErr(getErrMsg(error)));
  }
};

export const recommend = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getRecommendedProdsReq());
    const { data } = await axios.get("/api/v1/products", {
      params: {
        limit: 3,
        sort: "-name",
        "rating[gte]": 4,
      },
    });
    dispatch(getRecommendedProdsSuc(data.products));
  } catch (error) {
    dispatch(getRecommendedProdsErr(getErrMsg(error)));
  }
};

export const createProductReview =
  (productId: string, review: {}) =>
  async (dispatch: AppDispatch, getState: GetState) => {
    try {
      dispatch(addReviewReq());

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

      dispatch(addReviewSuc());
    } catch (error) {
      let errMsg = getErrMsg(error);
      dispatch(addReviewErr(errMsg));
      if (errMsg.toLowerCase().includes("not authorized")) {
        dispatch(logout());
      }
    }
  };

export const deleteProductReview =
  () => async (dispatch: AppDispatch, getState: GetState) => {
    try {
      dispatch(delReviewReq());

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
      dispatch(delReviewSuc());
    } catch (error) {
      let errMsg = getErrMsg(error);
      dispatch(delReviewErr(errMsg));
      if (errMsg.toLowerCase().includes("not authorized")) {
        dispatch(logout());
      }
    }
  };
