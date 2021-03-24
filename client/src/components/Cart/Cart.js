import React, { useEffect, useRef, useState } from 'react';
import { BiCartAlt } from 'react-icons/bi';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { calcTotal } from '../../utils/cost';
import './style.css';
export default function MenuListComposition() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useSelector(state => state.cart);
  const toggle = () => {
    setOpen(!open);
  };

  const menuRef = useRef(null);
  useEffect(() => {
    const handler = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, []);

  const numberOfItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  let total = cartItems.reduce(
    (acc, item) => acc + calcTotal(item.discount, item.price, item.qty),
    0
  );
  total = total.toFixed(2);

  return (
    <div
      className={` relative btn `}
      ref={menuRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      <BiCartAlt
        style={{ fontSize: '29.8px' }}
        className='cursor-pointer btn p-0'
      />
      {cartItems.length > 0 && (
        <span className='absolute -top-1 -right-2 bg-red-300 rounded-full  px-2 text-xs font-bold text-red-800'>
          {cartItems.length}
        </span>
      )}
      <div
        className={`  w-80 absolute right-0 bg-white border shadow-xl  rounded-lg menu px-3 py-4 transition-all duration-300 
        ${open ? 'z-50  ' : 'z-0 opacity-0 invisible  '} 
        
        `}
        id={`${open ? 'open' : 'close'}`}>
        <div className=' flex items-center justify-between mx-2 mb-3'>
          <h1 className='font-bold  text-lg text-gray-600'>
            {numberOfItems} Article(s)
          </h1>
          <Link
            to='/cart/123'
            onClick={toggle}
            className='uppercase tracking-wider font-medium cursor-pointer text-gray-500 border-b border-gray-700'>
            view cart
          </Link>
        </div>
        <div style={{ maxHeight: '400px', overflowY: 'scroll' }} id='scroll'>
          {cartItems.length === 0 ? (
            <div className=' px-2 py-4 bg-yellow-200 rounded-md my-3 text-yellow-800 font-medium   '>
              <p className='mb-2'>You cart is empty</p>
              <Link
                onClick={toggle}
                to='/products'
                className='bg-yellow-300 px-3 py-2  inline-block my-2 rounded-full cursor-pointer '>
                Start Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((cartItem, idx) => (
              <CartItem cartItem={cartItem} key={idx} />
            ))
          )}
        </div>
        <div className='flex flex-col items-center justify-center '>
          <div className='w-full  flex justify-between items-center px-4 py-2 mb-3 '>
            <h1 className=' font-medium uppercase tracking-wide text-xl '>
              Total :
            </h1>
            <p className='font-bold  text-xl  border-b'>${total}</p>
          </div>
          <Link
            to='/checkouts'
            onClick={toggle}
            className='w-full text-center bg-gray-800 rounded-md border-none py-3 px-5 font-medium uppercase tracking-wider  text-gray-400 focus:outline-none focus:ring-1 cursor-pointer'>
            payment
          </Link>
        </div>
      </div>
    </div>
  );
}
