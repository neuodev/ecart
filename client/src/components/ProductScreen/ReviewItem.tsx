import { Avatar, IconButton, Rating } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductReview } from "../../actions/products";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../store";
import { IReview } from "../../types";
import { stringToColor } from "../../utils";

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const ReviewItem: React.FC<{
  review: IReview;
}> = ({ review }) => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.userLogin);
  let {
    name,
    rating,
    comment,
    user: { email, _id },
    createdAt,
  } = review;
  const deleteReviewHandler = () => {
    // Delete user reivew on the currnet product
    dispatch(deleteProductReview());
  };

  return (
    <div className="my-2 flex  space-x-3 bg-gray-50 px-2 py-2">
      <Avatar {...stringAvatar(name)} />
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <div className="mb-1 mt-1">
            <p className="font-medium text-gray-800 leading-3">{name}</p>
            <p className="text-gray-600 text-xs font-light">{email}</p>
          </div>
          {userInfo?._id === _id && (
            <IconButton onClick={deleteReviewHandler} color="error">
              <DeleteIcon />
            </IconButton>
          )}
        </div>
        <div className="-ml-1 mb-1.5 flex items-center">
          <Rating value={rating} readOnly size="small" />
          <span className="font-light ml-1 text-xs border-gray-800">
            {moment(createdAt).fromNow()}
          </span>
        </div>
        <p className="leading-relaxed text-sm" style={{ fontWeight: "500" }}>
          {comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
