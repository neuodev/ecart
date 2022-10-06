import { Button, Typography, TypographyVariant } from "@mui/material";
import React from "react";

const EmptyCart: React.FC<{ variant?: TypographyVariant }> = ({ variant }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <img
        src="/images/empty-cart.png"
        alt="Empty Cart"
        title="Empty cart"
        className="h-80 object-contain inline-block"
      />
      <div className="lg:ml-4 flex flex-col items-center justify-center">
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
