import {
  FEATURED_PRODUCTS_FAIL,
  FEATURED_PRODUCTS_REQUEST,
  FEATURED_PRODUCTS_SUCCESS,
  TOP_RATED_PRODUCTS_FAIL,
  TOP_RATED_PRODUCTS_REQUEST,
  TOP_RATED_PRODUCTS_SUCCESS,
  BEST_SELLING_PRODUCTS_REQUEST,
  BEST_SELLING_PRODUCTS_SUCCESS,
  BEST_SELLING_PRODUCTS_FAIL,
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
  PRODUCTS_NEXT_PAGE_REQUREST,
  PRODUCTS_NEXT_PAGE_SUCCESS,
  PRODUCTS_NEXT_PAGE_FAIL,
} from './actionTypes';
import axios from 'axios';
import { logout } from './user';
export const getFeaturedProducts = () => async dispatch => {
  try {
    dispatch({ type: FEATURED_PRODUCTS_REQUEST });
    const { data } = await axios.get('/api/v1/products?limit=5');
    dispatch({ type: FEATURED_PRODUCTS_SUCCESS, payload: data.products });
  } catch (error) {
    dispatch({
      type: FEATURED_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
export const getTopRatedProducts = () => async dispatch => {
  try {
    dispatch({ type: TOP_RATED_PRODUCTS_REQUEST });
    const { data } = await axios.get('/api/v1/products?limit=3&sort=-rating');
    dispatch({ type: TOP_RATED_PRODUCTS_SUCCESS, payload: data.products });
  } catch (error) {
    dispatch({
      type: TOP_RATED_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
export const getBestSellingProducts = () => async dispatch => {
  try {
    dispatch({ type: BEST_SELLING_PRODUCTS_REQUEST });
    const { data } = await axios.get(
      '/api/v1/products?limit=3&sort=-rating,numReviews'
    );
    dispatch({ type: BEST_SELLING_PRODUCTS_SUCCESS, payload: data.products });
  } catch (error) {
    dispatch({
      type: BEST_SELLING_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const getLatestProducts = () => async dispatch => {
  try {
    dispatch({ type: LATEST_PRODUCTS_REQUEST });
    const { data } = await axios.get(
      '/api/v1/products?limit=3&sort=-createdAt'
    );
    dispatch({ type: LATEST_PRODUCTS_SUCCESS, payload: data.products });
  } catch (error) {
    dispatch({
      type: LATEST_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
export const serachProducts = (
  q,
  category,
  price,
  sort,
  brand,
  page,
  limit
) => async dispatch => {
  try {
    dispatch({ type: SEARCH_PRODUCTS_REQUEST });
    let url = '/api/v1/products?';
    if (!q && !price) {
      url = '/api/v1/products?';
      if (page) {
        url = url + `&page=${page}`;
      }
      if (limit) {
        url = url + `&limit=${limit}`;
      }
    } else if (!q || price || category || brand) {
      if (sort) {
        url = url + `&sort=${sort}`;
      }
      if (category) {
        url = url + `&category=${category}`;
      }
      if (price) {
        url = url + `&${price}`;
      }
      if (brand && brand !== 'SelectNoBrand') {
        url = url + `&brand=${brand}`;
      }
    } else if (q) {
      url = `api/v1/products?q=${`${q}`}`;

      if (sort) {
        url = url + `&sort=${sort}`;
      }
      if (category) {
        url = url + `&category=${category}`;
      }
      if (price) {
        url = url + `&${price}`;
      }
      if (brand && brand !== 'SelectNoBrand') {
        url = url + `&brand=${brand}`;
      }
      if (page) {
        url = url + `&page=${page}`;
      }
      if (limit) {
        url = url + `&limit=${limit}`;
      }
    }
    const { data } = await axios.get(url);
    dispatch({ type: SEARCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEARCH_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const getProductAction = id => async dispatch => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });

    let url = `/api/v1/products/${id}`;

    const { data } = await axios.get(url);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const recommend = () => async dispatch => {
  try {
    dispatch({ type: RECOMMEND_PRODUCTS_RQUIEST });

    let url = '/api/v1/products?limit=3&sort=-name&rating[gte]=4';

    const { data } = await axios.get(url);

    dispatch({ type: RECOMMEND_PRODUCTS_SUCCESS, payload: data.products });
  } catch (error) {
    dispatch({
      type: RECOMMEND_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const createProductReview = (productId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`/api/v1/products/${productId}/reviews`, review, config);

    dispatch({
      type: PRODUCT_CREATE_REVIEW_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.error
        ? error.response.data.error
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload: message,
    });
  }
};

export const deleteProductReview = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REVIEW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const { product } = getState().product;
    const productId = product._id;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/v1/products/${productId}/reviews`, config);

    dispatch({
      type: PRODUCT_DELETE_REVIEW_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.error
        ? error.response.data.error
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_DELETE_REVIEW_FAIL,
      payload: message,
    });
  }
};

export const nextPageProducts = (page, numPerPage) => async dispatch => {
  try {
    dispatch({ type: PRODUCTS_NEXT_PAGE_REQUREST });
    if (!numPerPage) {
      numPerPage = 5;
    }
    let url = `/api/v1/products?page=${page}&limit=${numPerPage}`;

    const { data } = await axios.get(url);

    dispatch({ type: PRODUCTS_NEXT_PAGE_SUCCESS, payload: data.products });
  } catch (error) {
    dispatch({
      type: PRODUCTS_NEXT_PAGE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
