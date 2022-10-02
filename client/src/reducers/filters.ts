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
  state: {
    sort: String;
    numPerPage: Number;
    category: string | null;
    price: number | null;
    brand: string | null;
  } = {
    sort: "name",
    numPerPage: 6,
    category: null,
    price: null,
    brand: null,
  },
  {
    type,
    payload,
  }:
    | {
        type:
          | typeof ASCENDING_ORDER
          | typeof DECENDING_ORDER
          | typeof RESET_FILTERS;
        payload: undefined;
      }
    | {
        type:
          | typeof CATEGORY
          | typeof PRICE
          | typeof BRAND
          | typeof NUMBER_PER_PAGE;
        payload: string;
      }
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
