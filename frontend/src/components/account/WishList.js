import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Alert from '../../utils/Alert';
import WishListItem from '../wishlist/WishListItem';
const WishList = ({ history }) => {
  const wishlist = useSelector(state => state.wishlist);
  return (
    <div>
      <h1 className='py-6 px-5 bg-gray-100 rounded-lg shadow-lg mb-5  mt-4  text-gray-700 font-medium '>
        Wish list
      </h1>
      <div>
        <div className='my-10'>
          {wishlist.length === 0 ? (
            <div className='shadow-md rounded-md overflow-hidden'>
              <Alert type='warning' message='wishlist is Empty'>
                <Link
                  to='/products'
                  className='inline-block bg-yellow-300 py-2 px-3 rounded-full uppercase tracking-wider text-sm  font-medium  my-2 '>
                  Start Shopping
                </Link>
              </Alert>
            </div>
          ) : (
            wishlist.map(product => (
              <WishListItem
                product={product}
                key={product._id}
                history={history}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
