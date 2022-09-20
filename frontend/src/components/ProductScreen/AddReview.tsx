import { Rating } from '@material-ui/lab';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProductReview } from '../../actions/products';
import Alert from '../../utils/Alert';
import Loader from '../../utils/Loader';

const AddReview = ({ productId, history }) => {
  const { error, loading, success } = useSelector(state => state.createReview);
  const { userInfo } = useSelector(state => state.userLogin);
  const [rating, setRating] = useState(0);
  const [ratingAlert, setRatingAlert] = useState('');
  const [reviewAlert, setReviewAlert] = useState('');
  const [review, setReview] = useState('');
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    if (!rating) {
      setRatingAlert('Rating is requried');
      setReviewAlert('');
      return;
    } else if (!review) {
      setReviewAlert('Review is required');
      setRatingAlert('');
      return;
    }

    if (!userInfo || !userInfo._id) {
      history.push('/login');
      return;
    }

    dispatch(createProductReview(productId, { rating, comment: review }));
    setReviewAlert('');
    setRatingAlert('');
    setReview('');
    setRating(0);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-col  container mx-auto mt-8'>
        <div className='mb-2'>
          {loading ? (
            <div className='flex items-center justify-center'>
              <Loader />
            </div>
          ) : error ? (
            <Alert type='error' message={error} />
          ) : (
            success && (
              <Alert message='Review Created successfully' type='success' />
            )
          )}
        </div>
        <div className='mb-1'>
          <Rating
            name='simple-controlled'
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          {ratingAlert && (
            <p className='text-xs  px-2 text-red-600 font-medium'>
              *{ratingAlert}
            </p>
          )}
        </div>
        <div className='my-2 mb-3 w-full'>
          <textarea
            className='border py-2 rounded-md   px-4 text-sm text-gray-700 focus:outline-none focus:ring-1 font-medium  w-full'
            type='text'
            placeholder='You Review'
            value={review}
            onChange={e => setReview(e.target.value)}
          />
          {reviewAlert && (
            <p className='text-xs  px-2 text-red-600 font-medium'>
              *{reviewAlert}
            </p>
          )}
        </div>
      </div>
      <button className='text-gray-700 py-2 px-3 bg-gray-100 rounded-md uppercase tracking-wider font-medium  hover:bg-gray-200 focus:outline-none focus:ring-1'>
        Submit
      </button>
    </form>
  );
};

export default AddReview;
