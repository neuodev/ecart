import { Button, Typography, TypographyVariant } from "@mui/material";
import React from "react";

const EmptyCart: React.FC<{ variant?: TypographyVariant }> = ({ variant }) => {
  return (
    <div className="flex felx-row items-center justify-center">
      <img
        src="/images/empty-cart.png"
        alt="Empty Cart"
        title="Empty cart"
        className="h-80"
      />
      <div className="ml-4 flex flex-col items-center justify-center">
        <Typography variant={variant} fontFamily="Rubik" mb="20px">
          Your cart is empty
        </Typography>
        <Button href="/products" variant="dark" fullWidth>
          Shart shopping
        </Button>
      </div>
    </div>
  );
};

export default EmptyCart;

EmptyCart.defaultProps = {
  variant: "h4",
};
