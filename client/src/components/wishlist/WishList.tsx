import React, { useState } from "react";
import WishListItem from "./WishListItem";
import { clearWishlist } from "../../actions/whishlist";
import { Badge, Button, IconButton } from "@mui/material";
import Modal from "../common/Modal";
import EmptyWishlist from "./EmptyWishlist";
import { FavoriteBorder } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../store";
import { IProduct } from "../../types";

const WishList: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist);
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const clearWishlistHandler = () => {
    dispatch(clearWishlist());
  };

  return (
    <div>
      <IconButton onClick={onOpen}>
        <Badge badgeContent={wishlist.length} color="primary">
          <FavoriteBorder />
        </Badge>
      </IconButton>
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
              {wishlist.map((product: IProduct) => (
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
