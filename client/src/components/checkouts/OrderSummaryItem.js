import React from 'react';

const OrderSummaryItem = ({ product }) => {
  const { image, price, name, qty } = product;
  return (
    <div className='flex items-center justify-between w-full mb-4'>
      <img
        src={image}
        className='w-24 h-24 object-cover   rounded-md overflow-hidden inline-block mr-3 border '
        alt={name}
      />
      <h1 className='mr-auto text-lg font-medium '>{name}</h1>
      <p className='font-medium text-gray-600'>
        {qty} x ${price}
      </p>
    </div>
  );
};

export default OrderSummaryItem;
