import React from 'react';
import { useState } from 'react';
import Item from './Order';

const OrderItem = ({ order, idx }) => {
  const [toggleId, setToggleId] = useState(false);
  const {
    totalPrice,
    isPaid,
    isDelivered,
    orderItems,
    createdAt,
    paidAt,
    deliveredAt,
    paymentMethod,
    shippingMethod,
    _id,
  } = order;
  return (
    <div className=' bg-gray-100 shadow-lg  mb-4 border rounded-lg col-span-12 md:col-span-6 lg:col-span-4'>
      <div className='bg-gray-200 w-full py-4 px-4 rounded-t-md'>
        <div className='flex items-center justify-start space-x-2'>
          <h1 className='text-base uppercase tracking-wider font-extrabold text-gray-700'>
            Order {idx + 1}
          </h1>
          <div className='flex text-sm'>
            <button
              onClick={() => setToggleId(!toggleId)}
              className='text-blue-500 focus:outline-none '>
              {toggleId ? 'Hide Id' : 'Show Id'}
            </button>
            {toggleId && <p>: {_id}</p>}
          </div>
        </div>
      </div>
      <div className='flex flex-col   my-3 pb-4 px-4 rounded-md'>
        <div className='flex items-center space-x-1 mb-1.5'>
          <h1 className='font-light  text-gray-400 '>Price : </h1>
          <p className='font-medium'>${totalPrice.toFixed(2)}</p>
        </div>
        <div className='flex items-center font-light mb-1.5 text-gray-400 '>
          <h1 className='inline-block'>Paid :</h1>
          {isPaid ? (
            <div className='py-1 px-2 mx-2 font-medium text-green-800  bg-green-200 uppercase rounded-lg'>
              <p>Done</p>
            </div>
          ) : (
            <div className='py-1 px-2 mx-2 font-medium text-red-800  bg-red-200 uppercase rounded-lg'>
              <p>Not Yet</p>
            </div>
          )}
        </div>
        <div className='flex items-center mb-1.5 '>
          <h1 className='font-light  text-gray-400 '>Delivered :</h1>
          {isDelivered ? (
            <div className='py-1 px-2 mx-2 font-medium text-green-800  bg-green-200 uppercase rounded-lg'>
              <p>Done</p>
            </div>
          ) : (
            <div className='py-1 px-2 mx-2 font-medium text-red-800  bg-red-200 uppercase rounded-lg'>
              <p>Not Yet</p>
            </div>
          )}
        </div>
        <div className='flex items-center mb-1.5 '>
          <h1 className='font-light  text-gray-400 '>Date : </h1>
          <p className='font-medium'> {createdAt.slice(0,10)}</p>
        </div>
        <div className='flex items-center mb-1.5'>
          <h1 className='font-light  text-gray-400 '>Payment Method : </h1>
          <p className='font-medium'>{paymentMethod}</p>
        </div>
        <div className='flex items-center  mb-3  '>
          <h1 className='font-light  text-gray-400 '>Shipping : </h1>
          <p className='font-medium'>
            {shippingMethod.name} - ${shippingMethod.cost.toFixed(2)}
          </p>
        </div>

        <div className=''>
          {orderItems.map((order, idx) => (
            <Item order={order} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
