import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { calcTotal } from "../../utils/cost";

const CartTotals = ({ cartItems }) => {
  let cartItemsNumber = cartItems.reduce((acc, item) => acc + item.qty, 0);

  let total = cartItems.reduce(
    (acc, item) => acc + calcTotal(item.discount, item.price, item.qty),
    0
  );
  total = total.toFixed(2);
  return (
    <div className="mt-4 border rounded-lg  shadow-lg  p-4 px-7    ">
      <div className="flex items-center justify-between lg:flex-col lg:items-start">
        <h1 className="text-lg uppercase font-medium  text-gray-700 mr-2 mb-1">
          Cart Items ({cartItemsNumber})
        </h1>
        <p className="font-light uppercase  text-xs mb-4">
          total Price : <span className="text-xl font-medium ">${total}</span>
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
      </div>
    </div>
  );
};

export default CartTotals;
