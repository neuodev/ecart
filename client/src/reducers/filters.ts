import { createReducer } from "@reduxjs/toolkit";
import {
  sortAsc,
  sortDesc,
  filterByCat,
  filterByPrice,
  filterByBrand,
  addPageLimit,
  resetFilters,
} from "../actions/actionTypes";
import { PriceFilter } from "../components/searchScreen/FilterSidebar";

type FilterState = {
  sort: string;
  limit: number;
  category: string | null;
  price: PriceFilter | null;
  brand: string | null;
};

export const filters = createReducer<FilterState>(
  {
    sort: "name",
    limit: 6,
    category: null,
    price: null,
    brand: null,
  },
  (builder) => {
    builder
      .addCase(sortAsc, (state) => ({
        ...state,
        sort: "name",
      }))
      .addCase(sortDesc, (state) => ({
        ...state,
        sort: "-name",
      }))
      .addCase(filterByCat, (state, { payload }) => ({
        ...state,
        category: payload,
      }))
      .addCase(filterByPrice, (state, { payload }) => ({
        ...state,
        price: payload,
      }))
      .addCase(filterByBrand, (state, { payload }) => ({
        ...state,
        brand: payload,
      }))
      .addCase(addPageLimit, (state, { payload }) => ({
        ...state,
        limit: payload,
      }))
      .addCase(resetFilters, (state) => ({
        ...state,
        category: null,
        brand: null,
        price: null,
      }));
  }
);
