import React, { useEffect } from 'react';
import OrderSummary from './OrderSummary';
import ShippingForm from './ShippingForm';
import { useSelector } from 'react-redux';
const Information = ({ history }) => {
  const { cartItems } = useSelector(state => state.cart);
  useEffect(() => {
    // redirect if the cart is empty
    if (cartItems.length === 0) {
      history.push('/');
    }
  }, [cartItems]);
  return (
    <div className='container mx-auto'>
      <div className='block md:hidden'>
        <OrderSummary />
      </div>
      <ShippingForm history={history} />
    </div>
  );
};

export default Information;
