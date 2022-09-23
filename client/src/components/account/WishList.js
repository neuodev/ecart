import { Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishListItem from "../wishlist/WishListItem";

const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div>
      <h1 className="py-6 px-5 bg-gray-100 shadow-lg mb-5  mt-4 text-gray-700 font-medium ">
        Wishlist {wishlist.length !== 0 && `(${wishlist.length})`}
      </h1>
      <div className="my-10">
        {wishlist.length === 0 ? (
          <div className="min-h-500 flex items-center justify-center flex-row mb-20">
            <img
              className="h-96 inline-block"
              src="/images/wishlist.png"
              alt="Wishlist"
            />
            <div className="ml-12">
              <Typography fontFamily="rubik" variant="h5" mt="30px">
                Your wishlist is empty
              </Typography>
              <Button
                LinkComponent={Link}
                to="/products"
                variant="dark"
                sx={{ mt: "30px" }}
              >
                Start shopping
              </Button>
            </div>
          </div>
        ) : (
          <div className="min-h-500">
            {wishlist.map((product) => (
              <WishListItem product={product} key={product._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
