import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import WishListItem from './WishListItem';
import { Link } from 'react-router-dom';
import { clearWishlist } from '../../actions/whishlist';

const WishList = ({ children, history }) => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();
  const [open, setOpen] = useState();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  document.addEventListener('click', e => {
    if (
      !e.target.closest('#modal') &&
      !e.target.closest('#open-modal') &&
      !e.target.closest('#removeFromWishlist') &&
      !e.target.closest('#clearWishlist')
    ) {
      handleClose();
    }
  });
  const clearWishlistHandler = () => {
    dispatch(clearWishlist());
  };
  return (
    <div className=''>
      <div className='relative'>
        {wishlist.length > 0 && (
          <span className='absolute -top-1.5 -right-1 px-2  bg-red-300 text-red-800 font-medium text-xs rounded-full  z-0'>
            {wishlist.length}
          </span>
        )}
        <button
          id='open-modal'
          type='button'
          className='focus:outline-none'
          onClick={handleOpen}>
          {children}
        </button>
      </div>
      {open && (
        <div
          className='absolute  left-1/2 w-11/12  lg:w-8/12 bg-gray-100 overflow-y-scroll z-50 shadow-2xl rounded-lg border transform -translate-x-1/2 
          -translate-y-1/2
          p-4
      '
          style={{ top: '50%', height: '500px' }}
          id='modal'>
          {wishlist.length === 0 ? (
            <div className='w-full  text-center bg-yellow-200 h-full flex flex-col items-center justify-center rounded-lg uppercase tracking-wider'>
              <h1 className='text-xl text-yellow-800 font-medium'>
                You Wishlist Is Empty
              </h1>
              <Link
                onClick={handleClose}
                className='inline-block font-medium bg-yellow-300 rounded-full  py-2 px-3  my-2 text-yellow-800 focus:outline-none'
                to='/products'>
                Start Shopping
              </Link>
            </div>
          ) : (
            <div>
              <div className='flex items-center justify-between my-2 mb-3'>
                <h1 className='text-lg font-medium'>Wishlist </h1>
                <button
                  id='clearWishlist'
                  onClick={clearWishlistHandler}
                  className='bg-blue-200 py-2 px-3 uppercase tracking-wider  w-24 rounded-full text-blue-700 text-sm font-medium focus:outline-none focus:ring'>
                  Clear
                </button>
              </div>
              {wishlist.map(product => (
                <WishListItem
                  handleClose={handleClose}
                  history={history}
                  key={product._id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WishList;
