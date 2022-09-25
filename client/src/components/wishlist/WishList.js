import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import WishListItem from "./WishListItem";
import { clearWishlist } from "../../actions/whishlist";
import { Button } from "@mui/material";
import Modal from "../common/Modal";
import EmptyWishlist from "./EmptyWishlist";

const WishList = ({ children, history }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const clearWishlistHandler = () => {
    dispatch(clearWishlist());
  };

  return (
    <div className="">
      <div className="relative">
        {wishlist.length > 0 && (
          <span className="absolute -top-1.5 -right-1 px-2  bg-red-300 text-red-800 font-medium text-xs rounded-full  z-0">
            {wishlist.length}
          </span>
        )}
        <button
          id="open-modal"
          type="button"
          className="focus:outline-none"
          onClick={handleOpen}
        >
          {children}
        </button>
      </div>
      <Modal minWidth={400} width={700} open={open} onClose={onClose}>
        <div>
          {wishlist.length === 0 ? (
            <EmptyWishlist asCol onClose={onClose} />
          ) : (
            <div>
              <div className="flex items-center justify-between my-2 mb-3">
                <h1 className="text-3xl font-medium">Wishlist </h1>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={clearWishlistHandler}
                  sx={{
                    width: "150px",
                    minWidth: "150px",
                  }}
                >
                  Clear
                </Button>
              </div>
              {wishlist.map((product) => (
                <WishListItem
                  handleClose={onClose}
                  key={product._id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default WishList;
