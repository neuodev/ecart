import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  Favorite,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Rating } from '@material-ui/lab';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { addToWishlist } from '../../actions/whishlist';
const StyledDiv = styled.div`
  width: ${props => (props.screen === 'search' ? '300px' : '240px')};
  height: 400px;

  @media (min-width: 600px) {
    width: ${props => (props.screen === 'search' ? '400px' : '250px')};
  }
  @media (min-width: 1000px) {
    width: ${props => (props.screen === 'search' ? '300px' : '250px')};
  }
`;
const ProductCard = ({ product, screen, history }) => {
  const [moveImgUp, setMoveImgUp] = useState(false);
  const wishlist = useSelector(state => state.wishlist);
  const { price, images, rating, name, category, _id } = product;

  let existInWishlist = wishlist.find(product => product._id === _id);

  const [show, setShow] = useState(false);
  const mouseEnter = () => {
    setShow(true);
    setMoveImgUp(true);
  };
  const mouseLeave = () => {
    setShow(false);
    setMoveImgUp(false);
  };
  const dispatch = useDispatch();
  const addToWishlistHandler = () => {
    dispatch(addToWishlist(product));
  };
  const addToCard = () => {
    history.push(`/cart/${_id}?qty=1`);
  };
  return (
    <StyledDiv
      screen={screen}
      className=' text-centerr mt-2 relative overflowd-hidden   rounded-xl  transform scale-95 transition-all duration-300 card-container shadow-md hover:shadow-xl  mb-4 bg-gray-5000 pb-4 '>
      <Link to={`/product/${_id}`}>
        <div
          className={` relativee h-4/5 ${
            moveImgUp ? 'moveUp' : 'moveDown'
          }  transform translate-x-0 transition-all duration-300 border rounded-t-xl`}
          style={{
            background: `url(${images && images[0]}) center center/cover`,
          }}></div>
      </Link>
      <div className=' text-center flex items-center justify-center py-3 space-x-3 -mt-12 absolute top-10 left-3 '>
        <button
          onClick={addToWishlistHandler}
          className='border rounded-md  text-gray-700  px-3 py-1  mt-1 focus:outline-none focus:ring-1 focus:ring-green-500 focus:text-green-500 shadow-md w-14 '>
          {existInWishlist ? (
            <Favorite className='text-green-400' />
          ) : (
            <FavoriteBorderOutlined />
          )}
        </button>
        <button
          onClick={addToCard}
          className='border rounded-md  text-gray-700  px-2 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-green-500 focus:text-green-500 shadow-md w-14 bg-gray-100'>
          <ShoppingCartOutlined />
        </button>
      </div>
      <div className='text-gray-700 flex-col relative z-10 flex  justify-between px-4  mb-4 '>
        <p className='text-xs uppercase text-gray-500 font-light mt-3 '>
          {category && category.join(' ,  ')}
        </p>
        <Link to={`/product/${_id}`}>
          <h1 className='font-medium  mb-1 truncate'>{name}</h1>
        </Link>
        <div className='flex  items-center '>
          <p className='font-bold text-xl mr-2'>${price.toFixed(2)}</p>
          <Rating readOnly size='small' value={rating} />
        </div>
      </div>
    </StyledDiv>
  );
};

export default ProductCard;
