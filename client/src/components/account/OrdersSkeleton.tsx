import { Skeleton } from "@mui/material";
import React from "react";

const OrdersSkeleton: React.FC<{}> = () => {
  return (
    <ul className="grid gap-4 grid-cols-12 mb-32">
      {new Array(10).fill(1).map((_, idx) => (
        <li
          className="bg-gray-100 shadow-lg mb-4 border rounded-lg overflow-hidden col-span-12 md:col-span-6 lg:col-span-4"
          key={idx}
        >
          <div className="p-6">
            <Skeleton variant="text" />
            {new Array(3).fill(1).map((_, idx) => (
              <Skeleton variant="text" key={idx * 1.2} />
            ))}
          </div>
          <Skeleton variant="rectangular" width="100%" height={40} />
        </li>
      ))}
    </ul>
  );
};

export default OrdersSkeleton;
