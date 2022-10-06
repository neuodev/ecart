import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { FavoriteBorderOutlined, Favorite } from "@mui/icons-material";
import { useSelector } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store";
import { IProduct } from "../../types";
import { DESC_NUM_OF_LETTERS } from "../../constants";
import { currFormat } from "../../utils/currency";
import { toggleWishlistItem } from "../../actions/actionTypes";

const ProductDetails: React.FC<{
  product: IProduct;
}> = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector<RootState, RootState["wishlist"]>(
    (state) => state.wishlist
  );

  const {
    _id,
    category,
    price,
    countInStock,
    name,
    brand,
    description,
    discount,
  } = product;

  const [more, setMore] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const readMore = () => {
    setMore(!more);
  };

  const addToCard = () => {
    navigate(`/cart/${_id}?qty=${quantity}`);
  };

  const addToWishlistHandler = () => {
    dispatch(toggleWishlistItem(product));
  };
  const isWished = wishlist.find((item) => item._id === product._id);

  const shouldShowReadMore = description.length > DESC_NUM_OF_LETTERS;

  return (
    <div className="px-4 py-4  max-w-2xl">
      <div className="mb-2">
        <h1 className="text-3xl font-semibold text-gray-800 mb-1 ">{name}</h1>
        <Rating value={5} size="small" readOnly />
        <span className="w-16 border-b-2 border-gray-600 h-1 block mt-2 mb-1"></span>
      </div>
      <div>
        <p className="text-gray-400 font-light  text-base line-through inline-block mt-4">
          {currFormat(price)}
        </p>
        <span className="text-gray-700  ml-1 font-semibold">{discount}%</span>
        <p className="text-gray-700 font-semibold text-2xl pb-4">
          {currFormat(price - price * (discount / 100))}
        </p>

        <div className="leading-relaxed tracking-wide text-gray-500 mb-10">
          {description.slice(0, DESC_NUM_OF_LETTERS)}
          {more && product.description.slice(DESC_NUM_OF_LETTERS)}
          {shouldShowReadMore && (
            <>
              <span className={`${!more ? "inline-block" : "hidden"}`}>
                ...
              </span>{" "}
              <button
                className="text-gray-800 capitalize focus:outline-none inline-block"
                onClick={readMore}
              >
                {more ? "Show less" : "More"}
              </button>
            </>
          )}
        </div>
        <div className="mt-6 ">
          <p className="font-light text-gray-500">
            From : <span className="font-bold text-gray-800"> {brand}</span>
          </p>
          <p className="font-light text-gray-500">
            Status :{" "}
            <span
              className={`font-bold ${
                countInStock > 0 ? "text-green-700" : "text-red-700"
              }  tracking-wide`}
            >
              {countInStock > 0 ? " In Stock" : "Out Of Stock"}
            </span>
          </p>
          <p className="font-light   text-gray-500 ">
            Categories :{" "}
            <span className="font-bold text-gray-700">
              {category.length !== 0
                ? category.map((category) => (
                    <span className="mr-1 capitalize" key={category}>
                      {category}
                    </span>
                  ))
                : "Unknown"}
            </span>
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-start space-x-1 md:space-x-5 py-5">
          <Button
            id="qty-btn"
            aria-controls={open ? "qty-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              width: "100px",
              height: "44px",
              maxHeight: "unset",
              minWidth: "unset",
            }}
            variant="dark-outlined"
            size="small"
          >
            Qty: {quantity}
          </Button>
          <Menu
            id="quty-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "qty-btn",
            }}
          >
            {new Array(10).fill(0).map((_, idx) => (
              <MenuItem
                sx={{ width: "150px" }}
                key={idx}
                onClick={() => {
                  handleClose();
                  setQuantity(idx + 1);
                }}
              >
                {idx + 1}
              </MenuItem>
            ))}
          </Menu>
          <Button
            variant="dark"
            onClick={addToCard}
            disabled={countInStock === 0}
          >
            Add to cart
          </Button>
          <Tooltip
            arrow
            placement="top"
            followCursor
            title={
              <Typography sx={{ textAlign: "center", fontWeight: "300" }}>
                {isWished ? "Remove " : "Add "}
                <Typography sx={{ fontWeight: "500", display: "inline" }}>
                  {name}
                </Typography>{" "}
                {isWished ? "from" : "to"} your wishlist{" "}
              </Typography>
            }
          >
            <IconButton size="large" onClick={addToWishlistHandler}>
              {isWished ? <Favorite /> : <FavoriteBorderOutlined />}
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
