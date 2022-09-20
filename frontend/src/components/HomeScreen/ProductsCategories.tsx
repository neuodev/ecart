import React, { useEffect } from 'react';
import ProductCard2 from './ProductCard2';
import { useSelector, useDispatch } from 'react-redux';
import { Skeleton } from '@material-ui/lab';
import {
  getBestSellingProducts,
  getLatestProducts,
  getTopRatedProducts,
} from '../../actions/products';

const ProductsCategories = () => {
  const { topRatedProducts, bestSellingProducts, latestProducts } = useSelector(
    state => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedProducts());
    dispatch(getBestSellingProducts());
    dispatch(getLatestProducts());
  }, []);
  return (
    <div className='border-t border-b  py-12'>
      <div className='grid grid-cols-12 container mx-auto'>
        <div className='mb-8 col-span-12 md:col-span-6 lg:col-span-4 '>
          <h1 className='uppercase mx-4 font-medium tracking-wide text-xl text-gray-600'>
            top rated products
          </h1>
          {topRatedProducts.loading 
             && (
              <div className='mt-4'>
                <div className='mb-4'>
                  <Skeleton variant='rect' width={210} height={118} />
                  <Skeleton variant='text' width={210} />
                  <Skeleton variant='text' width={210} />
                </div>
                <Skeleton variant='rect' width={210} height={118} />{' '}
                <Skeleton variant='text' width={210} />
                <Skeleton variant='text' width={210} />
              </div>
            )}
          {topRatedProducts.products.map(product => (
            <ProductCard2 product={product} />
          ))}
        </div>
        <div className='mb-8 col-span-12  md:col-span-6 lg:col-span-4'>
          <h1 className='uppercase mx-4 font-medium tracking-wide  text-gray-600'>
            BEST SELLING PRODUCTS
          </h1>
          {bestSellingProducts.loading && (
              <div className='mt-4'>
                {' '}
                <div className='mb-4'>
                  <Skeleton variant='rect' width={210} height={118} />
                  <Skeleton variant='text' width={210} />
                  <Skeleton variant='text' width={210} />
                </div>{' '}
                <Skeleton variant='rect' width={210} height={118} />{' '}
                <Skeleton variant='text' width={210} />
                <Skeleton variant='text' width={210} />
              </div>
            )}
          {bestSellingProducts.products.map(product => (
            <ProductCard2 product={product} />
          ))}
        </div>
        <div className=' col-span-12 md:col-span-6 lg:col-span-4'>
          <h1 className='uppercase mx-4 font-medium tracking-wide  text-gray-600'>
            LATEST PRODUCTS
          </h1>
          {latestProducts.loading  && (
              <div className='mt-4'>
                {' '}
                <div className='mb-4'>
                  <Skeleton variant='rect' width={210} height={118} />
                  <Skeleton variant='text' width={210} />
                  <Skeleton variant='text' width={210} />
                </div>{' '}
                <Skeleton variant='rect' width={210} height={118} />{' '}
                <Skeleton variant='text' width={210} />
                <Skeleton variant='text' width={210} />
              </div>
            )}
          {latestProducts.products.map(product => (
            <ProductCard2 product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCategories;
