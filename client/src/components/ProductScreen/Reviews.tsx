import React from "react";
import Alert from "../utils/Alert";
import AddReview from "./AddReview";
import ReviewItem from "./ReviewItem";
import Loader from "../utils/Loader";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IReview } from "../../types";
import { useAppSelector } from "../../store";

const Reviews: React.FC<{
  productId: string;
  reviews: IReview[];
}> = ({ productId, reviews }) => {
  const { loading, error, success } = useAppSelector(
    (state) => state.deleteReview
  );

  const { userInfo } = useAppSelector((state) => state.userLogin);

  const {
    product,
    loading: loadingProduct,
    error: productError,
  } = useAppSelector((state) => state.product);

  const displayReview = () => {
    if (loadingProduct || productError || !product) return null;
    if (!userInfo || !userInfo._id)
      return (
        <div>
          <p>
            Want to add a review ? you need to{" "}
            <Link className="underline font-medium" to="/login">
              login
            </Link>{" "}
            first
          </p>
        </div>
      );
    if (product.reviews.some((r) => r.user._id === userInfo._id)) return null;
    return <AddReview productId={productId} />;
  };

  return (
    <div>
      <div className="px-3 max-w-5xl">
        {displayReview()}
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
