import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/HomeScreen/ProductCard";
import FilterSidebarLargeScreen from "../components/searchScreen/FilterSidebarLargeScreen";
import Header from "../components/searchScreen/Header";
import { recommend, searchProducts } from "../actions/products";
import Recommend from "../components/searchScreen/Recommend";
import ProductSkeleton from "../components/utils/ProductSkeleton";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Stack, styled as MuiStyled } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../store";

const StyledDiv = styled.div`
  @media (min-width: 1450px) {
    max-width: 80%;
    margin: auto;
  }
`;

const SearchScreen: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  let [page, setPage] = useState<number>(1);
  let [numOfPages, setNumOfPages] = useState<number>(0);
  const loc = useLocation();
  const params = new URLSearchParams(loc.search);
  const q = params.get("q");

  const { loading, products, count } = useAppSelector(
    (state) => state.searchProducts
  );

  const { loading: recommendLoading, products: recommendedProducts } =
    useAppSelector((state) => state.recommended);

  const { sort, price, category, brand, limit } = useAppSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(searchProducts({ q, category, price, sort, brand, page, limit }));
  }, [q, category, price, sort, brand, page, limit]);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(recommend());
    }
  }, [products]);

  const fetchData = (nextPage: number) => {
    if (page === nextPage) return;
    setPage(nextPage);
  };

  useEffect(() => {
    const pages = Math.ceil(count / limit);
    setNumOfPages(pages);
  }, [limit, count]);

  const prevPage = () => {
    if (page === 1) return;
    let prevPage = page - 1;
    setPage(prevPage);
    fetchData(prevPage);
  };

  const nextPage = () => {
    if (page === numOfPages) return;
    let nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };

  return (
    <div className="mb-10">
      <StyledDiv className="mt-5 container mx-auto px-4">
        <Header />
        <div className="flex items-start flex-row">
          <div className="hidden md:block">
            <FilterSidebarLargeScreen />
          </div>
          <div className="flex items-center justify-center w-full pt-3">
            <div className="grid gap-5 grid-cols-12 mx-auto min-h-600">
              {recommendLoading || loading ? (
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
                new Array(6).fill(1).map((_, idx) => (
                  <div
                    key={idx}
                    className="col-span-12 mx-auto lg:col-span-6 xl:col-span-4"
                  >
                    <ProductSkeleton />
                  </div>
                ))
              ) : (
                products.map((product, idx: number) => (
                  <div
                    key={idx}
                    className="col-span-12 lg:col-span-6 xl:col-span-4"
                  >
                    <ProductCard product={product} />
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
                  {new Array(numOfPages).fill(1).map((_, idx: number) => (
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
                    disabled={page === numOfPages}
                    onClick={() => fetchData(numOfPages)}
                  >
                    <BsChevronRight />
                  </PaginationBtn>
                  <PaginationBtn
                    disabled={page === numOfPages}
                    color="default"
                    onClick={nextPage}
                  >
                    <BsChevronDoubleRight />
                  </PaginationBtn>
                </Stack>
              </div>
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
