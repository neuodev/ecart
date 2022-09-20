import React from 'react';

const Order = ({ order }) => {
  const { qty, name, image, price } = order;
  return (
    <div className='flex items-center  space-x-3 border rounded-md  mb-1'>
      <img
        className='inline-block rounded-md overflow-hidden w-16 h-16 '
        src={image}
        alt={name}
      />
      <div className='flex  flex-col space-y-1'>
        <h1 className='font-medium text-gray-800'>{name}</h1>
        <p className='font-light text-sm'>
          {qty} x ${price}
        </p>
      </div>
    </div>
  );
};

export default Order;
