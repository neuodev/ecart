import { Button } from "@mui/material";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { ICartItem } from "../../types";
import { calcTotal } from "../../utils/cost";
import { currFormat } from "../../utils/currency";

const CartTotals: React.FC<{
  cartItems: ICartItem[];
}> = ({ cartItems }) => {
  let numOfItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  let total = cartItems.reduce(
    (acc, item) => acc + calcTotal(item.discount, item.price, item.qty),
    0
  );

  return (
    <div className="lg:mt-4 border rounded-lg shadow-lg py-7 px-7 w-80">
      You have{" "}
      <span className="font-bold">
        {numOfItems === 1 ? "one item" : `${numOfItems} items`}.
      </span>{" "}
      it will cost you <span className="font-bold">{currFormat(total)}</span> in
      total.
      <Button
        fullWidth
        variant="dark"
        href="/checkouts"
        sx={{
          mt: "20px",
        }}
        endIcon={<BsArrowRight />}
      >
        Proceed To check out
      </Button>
    </div>
  );
};

export default CartTotals;
