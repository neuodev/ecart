import { Skeleton } from "@material-ui/lab";
import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="w-72 my-4 rounded-md overflow-hidden mx-4">
      <Skeleton variant="rect" height={200} widht={100} />
      <div className="flex flex-row items-center justify-center my-1">
        <Skeleton variant="circle" width={20} height={20} />
        <Skeleton variant="circle" width={20} height={20} />
      </div>
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </div>
  );
};

export default ProductSkeleton;
