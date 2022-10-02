import { Button } from "@mui/material";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { calcTotal } from "../../utils/cost";
import { currFormat } from "../../utils/currency";

const CartTotals = ({ cartItems }) => {
  let numOfItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  let total = cartItems.reduce(
    (acc, item) => acc + calcTotal(item.discount, item.price, item.qty),
    0
  );

  return (
    <div className="mt-4 border rounded-lg shadow-lg py-7 px-7 w-80">
      You have{" "}
      <span className="font-bold">
        {numOfItems === 1 ? "one item" : `${numOfItems} items`}.
      </span>{" "}
      it will cost you <span className="font-bold">{currFormat(total)}</span> in
      total.
      <Button
        fullWidth
        variant="dark"
        LinkComponent={Link}
        to="/checkouts"
        sx={{
          mt: "20px",
        }}
        endIcon={<BsArrowRight />}
      >
        Proceed To check out
      </Button>
      {/* <div className="flex items-center justify-between lg:flex-col lg:items-start">
        <h1 className="text-lg uppercase font-medium  text-gray-700 mr-2 mb-1">
          Cart Items ({cartItemsNumber})
        </h1>
        <p className="font-light capitalize text-xs mb-4">
          <span className="text-xl font-medium">{currFormat(total)}</span>
          in total
        </p>
      </div>
      <div>
        <Link
          to="/checkouts"
          className="w-full text-center flex items-center justify-center space-x-2 py-3 px-5  uppercase tracking-wider text-gray-50 font-medium  bg-gray-800 rounded-md mb-7 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-gray-300  cursor-pointer"
        >
          Proceed To check out
          <BsArrowRight />
        </Link>
      </div> */}
    </div>
  );
};

export default CartTotals;
