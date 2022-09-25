import { Button, IconButton, Rating, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { FavoriteBorderOutlined, Favorite } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { addToWishlist } from "../../actions/whishlist";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product, history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist);
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

  // todo: Change this
  const qty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [dot, setDot] = useState(true);
  const [more, setMore] = useState(false);
  const [btn, setBtn] = useState("Read More");
  const [quantity, setQuantity] = useState(1);
  const [showSelect, setShowSelect] = useState(false);

  const readMore = () => {
    setDot(!dot);
    setMore(!more);
    setBtn(btn === "Read More" ? "Read Less" : "Read More");
  };

  const updateQty = (qty) => {
    setQuantity(qty);
    setShowSelect(false);
  };

  const addToCard = () => {
    navigate(`/cart/${_id}?qty=${quantity}`);
  };

  const addToWishlistHandler = () => {
    dispatch(addToWishlist(product));
  };
  const isWished = wishlist.find((item) => item._id === product._id);
  return (
    <div className="px-4 py-4  max-w-2xl">
      <div className="mb-2">
        <h1 className="text-3xl font-semibold text-gray-800 mb-1 ">{name}</h1>
        <Rating value={5} size="small" readOnly />
        <span className="w-16 border-b-2 border-gray-600 h-1 block mt-2 mb-1"></span>
      </div>
      <div>
        <p className="text-gray-400 font-light  text-base line-through inline-block mt-4">
          {price.toFixed(2)}
        </p>
        <span className="text-gray-700  ml-1 font-semibold">{discount}%</span>
        <p className="text-gray-700 font-semibold text-2xl pb-4">
          ${(price - price * (discount / 100)).toFixed(2)}
        </p>

        <div className="leading-relaxed tracking-wide  text-gray-500 mb-10  ">
          {description.slice(0, 100)}
          <span
            className={`${dot ? "inline-block" : "hidden"}`}
            id="dots"
          ></span>{" "}
          <span className={`${more ? "block" : "hidden"}`}>
            {product.description.slice(100)}
          </span>
          <button
            className="text-gray-700 font-bold uppercase focus:outline-none hover:border-black border-b border-transparent"
            onClick={readMore}
          >
            {btn}{" "}
          </button>
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
              {category.map((category) => (
                <span className="mr-1 capitalize" key={category}>
                  {category}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-start space-x-5 py-5">
          <div
            onMouseEnter={() => setShowSelect(true)}
            onMouseLeave={() => setShowSelect(false)}
            className="relative w-20"
          >
            <p className="border h-12 flex items-center justify-center rounded-md text-lg font-bold">
              <span className="text-gray-200 text-sm uppercase mr-1">Qty:</span>{" "}
              {quantity}
            </p>
            <ul
              className={`${
                showSelect ? "block" : "hidden"
              } border w-20 text-center py-4  rounded-sm absolute top-10 left-0 h-32 overflow-y-scroll bg-gray-50`}
            >
              {qty.map((qty, idx) => (
                <li
                  onClick={() => updateQty(qty)}
                  className="py-1 hover:bg-gray-100 cursor-pointer rounded-md"
                  key={idx}
                >
                  {" "}
                  {qty}
                </li>
              ))}
            </ul>
          </div>
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
          {/* <button
            onClick={addToWishlistHandler}
            className="rounded-full p-4 focus:outline-none focus:ring-2 bg-gray-700  text-white hover:text-gray-700 hover:bg-gray-300 "
          >
            {isWished ? <Favorite /> : <FavoriteBorderOutlined />}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
