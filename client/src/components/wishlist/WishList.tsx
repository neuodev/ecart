import React, { useState } from "react";
import WishListItem from "./WishListItem";
import { Badge, Button, IconButton, useMediaQuery } from "@mui/material";
import Modal from "../common/Modal";
import EmptyWishlist from "./EmptyWishlist";
import { FavoriteBorder } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../store";
import { IProduct } from "../../types";
import { clearWishlist } from "../../actions/actionTypes";
import { ROUTES } from "../../constants/routes";
import { useLocation } from "react-router";

const WishList: React.FC<{}> = () => {
  const loc = useLocation();
  let ismd = useMediaQuery("(min-width: 768px)");
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
      <IconButton
        disabled={!ismd && loc.pathname.startsWith(ROUTES.ACCOUNT.WISHLIST)}
        href={!ismd ? ROUTES.ACCOUNT.WISHLIST : ""}
        onClick={() => ismd && onOpen()}
      >
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
