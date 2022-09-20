import { Rating } from '@material-ui/lab';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductReview } from '../../actions/products';
const ReviewItem = ({ review, history }) => {
  const { userInfo } = useSelector(state => state.userLogin);
  let {
    name,
    rating,
    comment,
    user: { email, _id },
    updatedAt,
  } = review;
  updatedAt = updatedAt.slice(0, 10);
  const dispatch = useDispatch();
  const [fn, ln] = name.split(' ');
  const avatar = fn[0] + ln[0];
  const deleteReviewHandler = () => {
    dispatch(deleteProductReview(review._id));
  };
  return (
    <div className='my-2 flex  space-x-3 bg-gray-100 rounded-md px-2 py-3'>
      <div className='p-2 px-3 text-sm font-bold text-blue-800 bg-blue-200 self-start rounded-full '>
        <span>{avatar}</span>
      </div>
      <div className='w-full'>
        <div className='flex items-center justify-between w-full  '>
          <h1 className='font-medium text-gray-800 '>
            {name}
            <span className='text-gray-600 text-xs   font-light mb-1 ml-1'>
              {email}
            </span>
          </h1>
          {userInfo._id === _id && (
            <button
              onClick={deleteReviewHandler}
              className='border border-red-200 p-2 focus:outline-none text-xs rounded-full text-red-500 font-medium uppercase focus:ring focus:ring-red-200 '>
              Delete
            </button>
          )}
        </div>
        <div className='-mb-1 flex items-center '>
          <Rating value={rating} readOnly size='small' />
          <span className='font-light ml-1  text-xs  border-gray-800'>
            {updatedAt}
          </span>
        </div>
        <p className='leading-relaxed text-sm ' style={{ fontWeight: '500' }}>
          {comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
