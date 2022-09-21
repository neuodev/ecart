import React, { useEffect } from "react";
import Alert from "../../utils/Alert";
import AddReview from "./AddReview";
import ReviewItem from "./ReviewItem";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../utils/Loader";

const Reviews = ({ productId, reviews, history }) => {
  const { loading, error, success } = useSelector(
    (state) => state.deleteReview
  );

  return (
    <div className="px-3 max-w-5xl ">
      <AddReview history={history} productId={productId} />

      <div className="mt-4">
        <div className="mb-8">
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader />
            </div>
          ) : error ? (
            <Alert type="error" message={error} />
          ) : (
            success && (
              <Alert message="Review Deleted successfully" type="success" />
            )
          )}
        </div>

        {reviews.length === 0 ? (
          <Alert type="warning" message="No Reviews Yet " />
        ) : (
          reviews.map((review, idx) => (
            <ReviewItem history={history} review={review} key={idx} />
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
