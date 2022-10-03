import React from "react";
import { useAppSelector } from "../../store";
import EmptyWishlist from "../wishlist/EmptyWishlist";
import WishListItem from "../wishlist/WishListItem";

const WishList: React.FC<{}> = () => {
  const wishlist = useAppSelector((state) => state.wishlist);

  return (
    <div>
      <h1 className="py-6 px-5 bg-gray-100 shadow-lg mb-5  mt-4 text-gray-700 font-medium ">
        Wishlist {wishlist.length !== 0 && `(${wishlist.length})`}
      </h1>
      <div className="my-10">
        {wishlist.length === 0 ? (
          <div className="min-h-500 flex items-center justify-center flex-row mb-20">
            <EmptyWishlist />
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
