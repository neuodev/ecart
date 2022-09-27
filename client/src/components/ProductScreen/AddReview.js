import { Button, Rating, TextField, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProductReview } from "../../actions/products";
import Alert from "../../utils/Alert";
import Loader from "../../utils/Loader";

const AddReview = ({ productId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, success } = useSelector(
    (state) => state.createReview
  );

  const { userInfo } = useSelector((state) => state.userLogin);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(null);

  const reviewHandler = () => {
    if (!userInfo || !userInfo._id) {
      navigate("/login");
      return;
    }

    dispatch(createProductReview(productId, { rating, comment: review }));
    setReview(null);
    setRating(0);
  };

  const { product } = useSelector((state) => state.product);

  return (
    <form>
      <div className="flex flex-col  container mx-auto">
        <div className="mb-2">
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader />
            </div>
          ) : error ? (
            <Alert type="error" message={error} />
          ) : (
            success && (
              <Alert message="Review Created successfully" type="success" />
            )
          )}
        </div>
        <div className="mb-1">
          <Tooltip
            followCursor
            placement="top"
            arrow
            title={
              <Typography fontWeight={300}>
                Rate{" "}
                {product ? (
                  <Typography fontWeight={500} display="inline-block">
                    {product.name}
                  </Typography>
                ) : (
                  "this product"
                )}
              </Typography>
            }
          >
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(_event, newValue) => {
                setRating(newValue);
              }}
            />
          </Tooltip>
        </div>
        <div className="my-2 mb-3 w-full">
          <TextField
            multiline
            fullWidth
            value={review || ""}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Share your experience with us"
          />
        </div>
      </div>

      <Button
        variant="dark"
        disabled={!review || !rating}
        onClick={reviewHandler}
        sx={{ minWidth: "200px" }}
      >
        Submit
      </Button>
    </form>
  );
};
export default AddReview;
