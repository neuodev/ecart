import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/HomeScreen/ProductCard';
import FilterSidebarLargeScreen from '../components/searchScreen/FilterSidebarLargeScreen';
import Header from '../components/searchScreen/Header';
import { useSelector, useDispatch } from 'react-redux';
import {
  nextPageProducts,
  recommend,
  serachProducts,
} from '../actions/products';
import Recommend from '../components/searchScreen/Recommend';
import ProductSkeleton from '../utils/ProductSkeleton';
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';
import MainNavbar from '../components/HomeScreen/MainNavbar';

const StyledDiv = styled.div`
  @media (min-width: 1450px) {
    max-width: 80%;
    margin: auto;
  }
`;
const SearchScreen = ({ location, history }) => {
  let [page, setPage] = useState(1);
  let [numOfBts, setNumOfBts] = useState([]);

  const q = location.search.toString().split('=')[1];
  const dispatch = useDispatch();
  const {
    searchProducts: { error, loading, products, count },
  } = useSelector(state => state);

  const {
    loading: recommendLoading,
    products: recommendedProducts,
  } = useSelector(state => state.recommend);

  const { sort, price, category, brand, numPerPage } = useSelector(
    state => state.filters
  );
  useEffect(() => {
    dispatch(serachProducts(q, category, price, sort, brand, page, numPerPage));
  }, [q, category, price, sort, brand, page, numPerPage]);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(recommend());
    }
  }, [products]);
  const placeholder = [1, 2, 3, 4];

  const fetchData = nextPage => {
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
    <StyledDiv className='mt-5 container mx-auto  px-4'>
      <div className='mb-2'>
        <MainNavbar history={history} />
      </div>
      <Header />
      <div className='flex items-start flex-row'>
        <div className='hidden md:block '>
          <FilterSidebarLargeScreen />
        </div>
        <div className='flex   items-center justify-center w-full'>
          {}
          <div className='grid col-span-12 mx-auto md:row-start-4 md:row-end-6 md:col-span-8  grid-cols-12 lg:col-span-9 xl:col-span-10 '>
            {recommendLoading ? (
              placeholder.map(skeleton => {
                if (skeleton < 3) {
                  return (
                    <div className='col-span-12 mx-auto  lg:col-span-6 xl:col-span-4 '>
                      <ProductSkeleton key={skeleton} />
                    </div>
                  );
                }
              })
            ) : products.length === 0 ? (
              <div className='col-span-12 mx-auto  lg:col-span-12 xl:col-span-12 '>
                <Recommend recommendedProducts={recommendedProducts} q={q} />
              </div>
            ) : loading ? (
              placeholder.map(skeleton => (
                <div className='col-span-12 mx-auto  lg:col-span-6 xl:col-span-4 '>
                  <ProductSkeleton key={skeleton} />
                </div>
              ))
            ) : (
              products.map(product => (
                <div className='grid col-span-12 mx-auto  lg:col-span-6 xl:col-span-4 '>
                  <ProductCard
                    product={product}
                    screen='search'
                    history={history}
                  />
                </div>
              ))
            )}
            <div className='col-span-12 mx-auto my-4 flex items-center'>
              <button
                onClick={() => fetchData(1)}
                className='px-3 py-2.5 bg-gray-200 mr-2 rounded-lg focus:outline-none text-gray-700 font-medium focus:ring focus:ring-gray-400 '>
                <BsChevronDoubleLeft />
              </button>
              <button
                onClick={prevPage}
                className='hidden md:block px-3 py-2.5 bg-gray-200 mr-2 rounded-lg focus:outline-none text-gray-700 font-medium focus:ring focus:ring-gray-400 '>
                <BsChevronLeft />
              </button>
              {numOfBts.map((_, idx) => (
                <button
                  onClick={() => fetchData(idx + 1)}
                  className={`${
                    page === idx + 1 && 'bg-green-300 text-green-800'
                  } px-3 py-2 bg-gray-200 mr-2 rounded-lg focus:outline-none text-gray-700 font-medium focus:ring focus:ring-green-400 `}>
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={nextPage}
                className='hidden md:block  px-3 py-2.5 bg-gray-200 mr-2 rounded-lg focus:outline-none text-gray-700 font-medium focus:ring focus:ring-gray-400 '>
                <BsChevronRight />
              </button>
              <button
                onClick={() => fetchData(numOfBts.length)}
                className='px-3 py-2.5 bg-gray-200 mr-2 rounded-lg focus:outline-none text-gray-700 font-medium focus:ring focus:ring-gray-400 '>
                <BsChevronDoubleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default SearchScreen;
