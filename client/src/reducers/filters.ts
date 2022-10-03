import {
  ASCENDING_ORDER,
  DECENDING_ORDER,
  PRICE,
  CATEGORY,
  BRAND,
  ITEMS_LIMIT,
  RESET_FILTERS,
} from "../actions/actionTypes";
import { PriceFilter } from "../components/searchScreen/FilterSidebar";

type FilterState = {
  sort: string;
  limit: number;
  category: string | null;
  price: PriceFilter | null;
  brand: string | null;
};

type Action =
  | {
      type:
        | typeof ASCENDING_ORDER
        | typeof DECENDING_ORDER
        | typeof RESET_FILTERS;
      payload: undefined;
    }
  | {
      type: typeof CATEGORY | typeof BRAND | typeof ITEMS_LIMIT;
      payload: string;
    }
  | {
      type: typeof PRICE;
      payload: PriceFilter;
    };

export function filters(
  state: FilterState = {
    sort: "name",
    limit: 6,
    category: null,
    price: null,
    brand: null,
  },
  { type, payload }: Action
): FilterState {
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
    case ITEMS_LIMIT:
      return {
        ...state,
        limit: Number(payload),
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
}
