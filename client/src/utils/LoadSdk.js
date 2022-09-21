import { Skeleton } from "@mui/material";
import React from "react";

const LoadSdk = () => {
  return (
    <div>
      <div className="mb-2">
        <Skeleton variant="rect" height={50} />
      </div>
      <div>
        <Skeleton variant="rect" height={50} />
      </div>
    </div>
  );
};

export default LoadSdk;
