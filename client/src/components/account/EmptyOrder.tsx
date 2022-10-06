import { Button, Typography } from "@mui/material";
import React from "react";

const EmptyOrder: React.FC<{}> = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <img
        src="/images/empty-order.png"
        alt="Empty Cart"
        title="Empty cart"
        className="h-80"
      />
      <div className="ml-4 flex flex-col items-center justify-center">
        <Typography variant="h5" fontFamily="Rubik" mb="20px">
          You did make any orders yet!
        </Typography>
        <Button href="/products" variant="dark" fullWidth>
          Shart shopping
        </Button>
      </div>
    </div>
  );
};

export default EmptyOrder;
