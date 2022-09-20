import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BiCart, BiCartAlt, BiChevronDown } from 'react-icons/bi';
import OrderSummaryItem from './OrderSummaryItem';
import { useSelector, useDispatch } from 'react-redux';
import { calcTotal } from '../../utils/cost';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { calcSubTotal } from '../../utils/calcSubTotal';
const OrderSummary = () => {
  const { cartItems, shippingMethod } = useSelector(state => state.cart);
  const [currentShppingCost, setCurrentShppingCost] = useState('--,--');
  let subTotal = calcSubTotal(cartItems);
  let total;
  if (shippingMethod) {
    total = calcTotalPrice(cartItems, shippingMethod);
  } else {
    total = calcTotalPrice(cartItems);
  }
  total = total.toFixed(2);
  useEffect(() => {
    if (shippingMethod) {
      setCurrentShppingCost(shippingMethod.cost.toFixed());
    }
  }, [shippingMethod]);
  return (
    <Accordion square>
      <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
        <div className='flex items-center justify-between w-full container mx-auto px-4'>
          <div className='flex items-center  text-green-400 font-medium '>
            <BiCart className='mr-1 text-xl' />
            <p>Show order Summary</p>
            <BiChevronDown className='text-xl mt-1 ' />
          </div>
          <p className='font-bold text-gray-800 '>${total}</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className='w-full container mx-auto px-4'>
          {cartItems.map((product, idx) => (
            <OrderSummaryItem key={idx} product={product} />
          ))}

          <div className='border-b '></div>
          <div className='py-4'>
            <div className='flex items-center justify-between mb-2'>
              <h1 className='font-light '>Subtotal</h1>
              <p className='text-lg'>${subTotal.toFixed(2)}</p>
            </div>
            <div className='flex items-center justify-between'>
              <h1 className='font-light'>Shipping</h1>
              <p className='text-lg'>${currentShppingCost}</p>
            </div>
          </div>
          <div className='border-b '></div>
          <div className='flex items-center justify-between py-4'>
            <h1 className='font-light text-lg'>Total</h1>
            <p>
              <span className='text-sm font-light'>USD</span>
              <span className='font-medium text-xl ml-1'>${total}</span>
            </p>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default OrderSummary;
