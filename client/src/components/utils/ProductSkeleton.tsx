import { Skeleton } from "@mui/material";
import React from "react";

const ProductSkeleton: React.FC<{}> = () => {
  return (
    <div className="rounded-md overflow-hidden mx-4">
      <Skeleton variant="rectangular" height="18rem" width="100%" />
      <div>
        <Skeleton variant="text" width="50px" height="20px" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="100px" />
        <Skeleton variant="text" width="140px" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
