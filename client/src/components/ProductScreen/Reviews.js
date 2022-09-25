import React from "react";
import Alert from "../../utils/Alert";
import AddReview from "./AddReview";
import ReviewItem from "./ReviewItem";
import { useSelector } from "react-redux";
import Loader from "../../utils/Loader";
import { Typography } from "@mui/material";

const Reviews = ({ productId, reviews }) => {
  const { loading, error, success } = useSelector(
    (state) => state.deleteReview
  );

  return (
    <div>
      <div className="px-3 max-w-5xl">
        <AddReview productId={productId} />

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
        </div>
      </div>
      <div className="min-h-500">
        {reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/reviews.png"
              alt="No reviews yet"
              title="No reviews"
            />
            <Typography variant="h4" fontFamily="Rubik">
              No reviews yet
            </Typography>
          </div>
        ) : (
          <div className="max-w-5xl px-3">
            {reviews.map((review, idx) => (
              <ReviewItem review={review} key={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
