import {
  ASCENDING_ORDER,
  DECENDING_ORDER,
  PRICE,
  CATEGORY,
  BRAND,
  NUMBER_PER_PAGE,
  RESET_FILTERS,
} from "../actions/actionTypes";

export const filters = (
  state = {
    sort: "name",
    numPerPage: 6,
    category: null,
    price: null,
    brand: null,
  },
  { type, payload }
) => {
  switch (type) {
    case ASCENDING_ORDER:
      return {
        ...state,
        sort: "name",
      };
    case DECENDING_ORDER:
      return {
        ...state,
        sort: "-name",
      };

    case CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case PRICE:
      return {
        ...state,
        price: payload,
      };
    case BRAND:
      return {
        ...state,
        brand: payload,
      };

    case NUMBER_PER_PAGE:
      return {
        ...state,
        numPerPage: payload,
      };

    case RESET_FILTERS:
      return {
        ...state,
        category: null,
        brand: null,
        price: null,
      };
    default:
      return state;
  }
};
