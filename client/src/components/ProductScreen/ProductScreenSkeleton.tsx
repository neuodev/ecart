import React from "react";
import { Skeleton } from "@mui/material";
import { randomIntFromInterval } from "../../utils";

const ProductScreenSkeleton = () => {
  return (
    <div className="px-4 min-h-600">
      <div className="grid grid-cols-12 lg:gap-12">
        <div className="mb-28 lg:mb-5 col-span-12 lg:col-span-3 h-80">
          <Skeleton variant="rectangular" height="100%" />
          <div className="flex mt-4 space-x-4 overflow-hidden">
            {new Array(3).fill(1).map((_, idx) => (
              <Skeleton
                key={idx}
                variant="rectangular"
                height={80}
                width={80}
              />
            ))}
          </div>
        </div>

        <div className="col-span-8 flex items-start flex-col justify-start">
          <div className="-mt-2 mb-3">
            <Skeleton variant="text" height={50} width={250} />
          </div>
          {new Array(6).fill(1).map((_, idx) => (
            <Skeleton
              variant="text"
              height={20}
              width={randomIntFromInterval(200, 400)}
              key={idx}
            />
          ))}

          <div className="my-8 flex items-center justify-start">
            <Skeleton
              variant="rectangular"
              height={50}
              width={80}
              className="mr-4"
            />
            <Skeleton
              variant="rectangular"
              height={50}
              width={160}
              className="mr-4"
            />
            <Skeleton variant="circular" height={50} width={50} />
          </div>
        </div>
      </div>

      <div className="mt-32">
        <div className="flex items-center justify-start">
          {new Array(3).fill(1).map((_, idx) => (
            <Skeleton
              key={idx}
              variant="rectangular"
              height={60}
              width={150}
              className="mt-2 mr-2"
            />
          ))}
        </div>

        <div className="max-w-screen-lg mb-32 mt-8">
          {new Array(4).fill(1).map((_, idx) => (
            <Skeleton
              key={idx}
              variant="rectangular"
              height={60}
              width="100%"
              className="mt-2 mr-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductScreenSkeleton;
