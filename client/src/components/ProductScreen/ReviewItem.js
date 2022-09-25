import { Avatar, IconButton, Rating } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductReview } from "../../actions/products";
import DeleteIcon from "@mui/icons-material/Delete";

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const ReviewItem = ({ review }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  let {
    name,
    rating,
    comment,
    user: { email, _id },
    updatedAt,
  } = review;
  updatedAt = updatedAt.slice(0, 10);
  const dispatch = useDispatch();
  const deleteReviewHandler = () => {
    dispatch(deleteProductReview(review._id));
  };

  return (
    <div className="my-2 flex  space-x-3 bg-gray-50 px-2 py-3">
      <Avatar {...stringAvatar(name)} />
      <div className="w-full">
        <div className="flex items-center justify-between w-full  ">
          <h1 className="font-medium text-gray-800 ">
            {name}
            <span className="text-gray-600 text-xs   font-light mb-1 ml-1">
              {email}
            </span>
          </h1>
          {userInfo._id === _id && (
            <IconButton onClick={deleteReviewHandler} color="error">
              <DeleteIcon />
            </IconButton>
          )}
        </div>
        <div className="-mb-1 flex items-center ">
          <Rating value={rating} readOnly size="small" />
          <span className="font-light ml-1  text-xs  border-gray-800">
            {updatedAt}
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
