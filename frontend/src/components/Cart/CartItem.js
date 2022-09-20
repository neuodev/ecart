import { Close } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions/cart';

const CartItem = ({ cartItem }) => {
  const { name, qty, price, discount, image, product } = cartItem;
  const priceAfterDiscount = price - price * (discount / 100);
  const dispatch = useDispatch();

  const deleteCartItem = id => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className='flex items-center justify-between my-3 mx-3 menu-item'>
      <div>
        <h1 className='font-sans font-medium mr-1 '>{name} </h1>
        <p className='text-gray-600 font-light'>
          {qty} x ${priceAfterDiscount.toFixed(2)}
        </p>
      </div>
      <div className=' h-28 w-28 overflow-hidden rounded-md relative flex-none'>
        <img className='h-28 w-28 object-cover' src={image} alt={name} />
        <button
          className='absolute top-0.5 right-0.5 border rounded-full text-xs cursor-pointer focus:outline-none'
          onClick={() => deleteCartItem(product)}>
          <Close />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
