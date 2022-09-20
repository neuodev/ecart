import { Rating } from '@material-ui/lab';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../actions/whishlist';
const WishListItem = ({ product, history, handleClose }) => {
  const { name, images, brand, rating, _id } = product;
  const dispatch = useDispatch();
  const addToCart = () => {
    history.push(`/cart/${_id}?qty=1`);
    handleClose();
    dispatch(removeFromWishlist(_id));
  };

  const removeFromWishlistHandler = () => {
    dispatch(removeFromWishlist(_id));
  };
  return (
    <div className='flex items-center'>
      <img
        className='w-20 h-20 border rounded-sm overflow-hidden inline-block flex-none mr-3 mb-3'
        src={images[0]}
        alt={name}
      />
      <div className='w-full '>
        <p className='text-sm font-light text-gray-400'>{brand}</p>
        <p className='font-medium'>{name}</p>
        <p>
          <Rating value={rating} readOnly />
        </p>
      </div>
      <div>
        <div className=' w-24 '>
          <button

            onClick={addToCart}
            className='inline-block text-center flex-none text-xs mb-1 bg-green-100  w-full text-green-800 font-medium py-2 px-1 rounded-full shadow-sm focus:outline-none   '>
            Add To Cart
          </button>
          <button
          id='removeFromWishlist'
            onClick={removeFromWishlistHandler}
            className='flex-none text-xs bg-red-100  w-full text-red-800 font-medium py-2 rounded-full shadow-sm focus:outline-none  '>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
