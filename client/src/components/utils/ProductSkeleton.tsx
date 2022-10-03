import { Skeleton } from "@mui/material";
import React from "react";

const ProductSkeleton: React.FC<{}> = () => {
  return (
    <div className="w-72 my-4 rounded-md overflow-hidden mx-4">
      <Skeleton variant="rectangular" height={200} width={100} />
      <div className="flex flex-row items-center justify-center my-1">
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="circular" width={20} height={20} />
      </div>
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </div>
  );
};

export default ProductSkeleton;
