import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import ImageGallary from '../components/ProductScreen/ImageGallary';
import ProductDetails from '../components/ProductScreen/ProductDetails';
import MoreInfo from '../components/ProductScreen/MoreInfo';
import { useSelector, useDispatch } from 'react-redux';
import { getProductAction } from '../actions/products';
import ProductScreenSkeleton from '../components/ProductScreen/ProductScreenSkeleton';
import MainNavbar from '../components/HomeScreen/MainNavbar';

const ProductScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const productId = match.params.id;
  const { product, error, loading } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getProductAction(productId));
  }, [match, dispatch]);

  return (
    <>
      <div className=''>
        <MainNavbar history={history} />
      </div>
      <div className=' py-5 container mx-auto'>
        {loading ? (
          <>
            <ProductScreenSkeleton />
          </>
        ) : error ? (
          <div>
            <h1>Error</h1>
          </div>
        ) : (
          product && (
            <div className='grid grid-cols-12 mb-20'>
              <div className='col-span-12 md:col-span-5 lg:col-span-5 xl:col-span-4'>
                <ImageGallary images={product.images} />
              </div>
              <div className='col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-8 mb-20'>
                <ProductDetails history={history} product={product} />
              </div>
              <div className='col-span-12'>
                <MoreInfo history={history} product={product} />
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ProductScreen;
