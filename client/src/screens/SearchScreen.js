import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/HomeScreen/ProductCard";
import FilterSidebarLargeScreen from "../components/searchScreen/FilterSidebarLargeScreen";
import Header from "../components/searchScreen/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  nextPageProducts,
  recommend,
  serachProducts,
} from "../actions/products";
import Recommend from "../components/searchScreen/Recommend";
import ProductSkeleton from "../utils/ProductSkeleton";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import MainNavbar from "../components/HomeScreen/MainNavbar";
import { useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Box, Stack, styled as MuiStyled } from "@mui/system";
import theme from "../theme";

const StyledDiv = styled.div`
  @media (min-width: 1450px) {
    max-width: 80%;
    margin: auto;
  }
`;

const SearchScreen = () => {
  const dispatch = useDispatch();
  let [page, setPage] = useState(1);
  let [numOfBts, setNumOfBts] = useState([]);
  const loc = useLocation();
  const params = new URLSearchParams(loc.search);
  const q = params.get("q");
  // todo: Handle error states
  const {
    searchProducts: { error, loading, products, count },
  } = useSelector((state) => state);

  const { loading: recommendLoading, products: recommendedProducts } =
    useSelector((state) => state.recommend);

  const { sort, price, category, brand, numPerPage } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(serachProducts(q, category, price, sort, brand, page, numPerPage));
  }, [q, category, price, sort, brand, page, numPerPage]);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(recommend());
    }
  }, [products]);

  const fetchData = (nextPage) => {
    if (page === nextPage) return;
    dispatch(nextPageProducts(nextPage, numPerPage));
    setPage(nextPage);
  };

  useEffect(() => {
    let countOfPages = [];
    const number = Math.ceil(count / numPerPage);
    for (let i = 0; i < number; i++) {
      countOfPages.push(i);
    }
    setNumOfBts(countOfPages);
  }, [numPerPage, count]);

  const prevPage = () => {
    if (page === 1) return;
    let prevPage = page - 1;
    setPage(prevPage);
    fetchData(prevPage);
  };

  const nextPage = () => {
    if (page === numOfBts.length) return;
    let nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };

  return (
    <div className="mb-10">
      <div className="mb-2">
        <MainNavbar />
      </div>
      <StyledDiv className="mt-5 container mx-auto px-4">
        <Header />
        <div className="flex items-start flex-row">
          <div className="hidden md:block">
            <FilterSidebarLargeScreen />
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="grid col-span-12 mx-auto md:row-start-4 md:row-end-6 md:col-span-8  grid-cols-12 lg:col-span-9 xl:col-span-10 min-h-600">
              {recommendLoading ? (
                new Array(3).fill(0).map((_, idx) => {
                  return (
                    <div
                      key={idx * 2}
                      className="col-span-12 mx-auto  lg:col-span-6 xl:col-span-4"
                    >
                      <ProductSkeleton />
                    </div>
                  );
                })
              ) : products.length === 0 ? (
                <div className="col-span-12 mx-auto lg:col-span-12 xl:col-span-12 min-h-500">
                  <Recommend recommendedProducts={recommendedProducts} />
                </div>
              ) : loading ? (
                new Array(6).fill(0).map((_, idx) => (
                  <div
                    key={idx}
                    className="col-span-12 mx-auto lg:col-span-6 xl:col-span-4"
                  >
                    <ProductSkeleton />
                  </div>
                ))
              ) : (
                products.map((product, idx) => (
                  <div
                    key={idx}
                    className="grid col-span-12 mx-auto lg:col-span-6 xl:col-span-4"
                  >
                    <ProductCard product={product} screen="search" />
                  </div>
                ))
              )}
              <div className="col-span-12 mx-auto my-4 flex justify-center items-center">
                <Stack direction="row" spacing={1}>
                  <PaginationBtn
                    color="default"
                    disabled={page === 1}
                    onClick={() => fetchData(1)}
                  >
                    <BsChevronDoubleLeft />
                  </PaginationBtn>
                  <PaginationBtn
                    disabled={page === 1}
                    color="default"
                    onClick={prevPage}
                  >
                    <BsChevronLeft />
                  </PaginationBtn>
                  {numOfBts.map((_, idx) => (
                    <PaginationBtn
                      key={idx}
                      onClick={() => fetchData(idx + 1)}
                      color={page === idx + 1 ? "primary" : "default"}
                      sx={{
                        border: page === idx + 1 ? 1 : 0,
                      }}
                    >
                      {idx + 1}
                    </PaginationBtn>
                  ))}
                  <PaginationBtn
                    color="default"
                    disabled={page === numOfBts.length}
                    onClick={() => fetchData(numOfBts.length)}
                  >
                    <BsChevronRight />
                  </PaginationBtn>
                  <PaginationBtn
                    disabled={page === numOfBts.length}
                    color="default"
                    onClick={nextPage}
                  >
                    <BsChevronDoubleRight />
                  </PaginationBtn>
                </Stack>
              </div>
              {/* <div className="col-span-12 mx-auto my-4 flex items-center">
              <button
                onClick={() => fetchData(1)}
                className="px-3 py-2.5 bg-gray-200 mr-2 rounded-lg focus:outline-none text-gray-700 font-medium focus:ring focus:ring-gray-400 "
              >
                <BsChevronDoubleLeft />
              </button>
              <button
                onClick={prevPage}
                className="hidden md:block px-3 py-2.5 bg-gray-200 mr-2 rounded-lg focus:outline-none text-gray-700 font-medium focus:ring focus:ring-gray-400 "
              >
                <BsChevronLeft />
              </button>
              {numOfBts.map((_, idx) => (
                <button
                  onClick={() => fetchData(idx + 1)}
                  className={`${
                    page === idx + 1 && "bg-green-300 text-green-800"
                  } px-3 py-2 bg-gray-200 mr-2 rounded-lg focus:outline-none text-gray-700 font-medium focus:ring focus:ring-green-400 `}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={nextPage}
                className="hidden md:block  px-3 py-2.5 bg-gray-200 mr-2 rounded-lg focus:outline-none text-gray-700 font-medium focus:ring focus:ring-gray-400 "
              >
                <BsChevronRight />
              </button>
              <button
                onClick={() => fetchData(numOfBts.length)}
                className="px-3 py-2.5 bg-gray-200 mr-2 rounded-lg focus:outline-none text-gray-700 font-medium focus:ring focus:ring-gray-400 "
              >
                <BsChevronDoubleRight />
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </StyledDiv>
    </div>
  );
};

export default SearchScreen;

const PaginationBtn = MuiStyled(IconButton)({
  width: "40px",
  height: "40px",
  fontSize: "16px",
});
