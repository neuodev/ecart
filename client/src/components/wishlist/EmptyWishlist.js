import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const EmptyWishlist = ({ asCol, onClose }) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${
        asCol ? "flex-col" : "flex-row"
      }`}
    >
      <img
        className="h-96 inline-block"
        src="/images/wishlist.png"
        alt="Wishlist"
      />
      <div
        className={`${
          !asCol && "ml-12"
        } flex items-center justify-center flex-col`}
      >
        <Typography fontFamily="rubik" variant="h5" mt="30px">
          Your wishlist is empty
        </Typography>
        <div className="mt-8">
          {onClose && (
            <Button
              onClick={onClose}
              variant="outlined"
              color="error"
              sx={{ mr: "8px" }}
            >
              Close
            </Button>
          )}
          <Button LinkComponent={Link} to="/products" variant="dark">
            Start shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyWishlist;
