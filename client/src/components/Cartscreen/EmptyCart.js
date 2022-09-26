import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex felx-row items-center justify-center">
      <img
        src="/images/empty-cart.png"
        alt="Empty Cart"
        title="Empty cart"
        className="h-80"
      />
      <div className="ml-4">
        <Typography variant="h4" fontFamily="Rubik" mb="20px">
          Your cart is empty
        </Typography>
        <Button LinkComponent={Link} to="/products" variant="dark" fullWidth>
          Shart shopping
        </Button>
      </div>
    </div>
  );
};

export default EmptyCart;
