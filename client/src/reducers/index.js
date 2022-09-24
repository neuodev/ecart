import { combineReducers } from "redux";
import { featuredProducts } from "./featuredProducts";
import { topRatedProducts } from "./topRatedProducts";
import { bestSellingProducts } from "./bestSellingProducts";
import { latestProducts } from "./latestProducts";
import { searchProducts, recommendProducts } from "./SearchProducts";
import { filters } from "./filters";
import {
  getProduct,
  productReviewCreateReducer,
  productReviewDeleteReducer,
} from "./product";
import { cartReducer } from "./cart";
import { userRegisterReducer, userLoginReducer } from "./user";
import {
  orderCreateReducer,
  orderPayReducer,
  orderListMyReducer,
} from "./order";
import { wishlist } from "./wishlist";
export default combineReducers({
  wishlist,
  myOrderList: orderListMyReducer,
  createReview: productReviewCreateReducer,
  deleteReview: productReviewDeleteReducer,
  orderPay: orderPayReducer,
  orderCreate: orderCreateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  recommend: recommendProducts,
  featuredProducts,
  topRatedProducts,
  bestSellingProducts,
  latestProducts,
  searchProducts,
  filters,
  product: getProduct,
  cart: cartReducer,
});
