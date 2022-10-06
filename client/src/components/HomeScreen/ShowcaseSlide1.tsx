import React from "react";
import { Button } from "@mui/material";

const ShowcaseSlide1: React.FC<{}> = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      <div className="container max-w-screen-lg mx-auto h-full w-full flex flex-col-reverse lg:flex-row">
        <div className="flex items-center lg:items-start justify-center flex-col w-full pb-10 lg:pb-0">
          <h6 className="text-gray-500 font-medium mb-1 text-base md:text-2xl">
            Toally Wireless High-Performance{" "}
          </h6>
          <h1 className="text-gray-800 font-bold text-2xl uppercase tracking-wide mb-1 md:text-4xl">
            Select Headphones{" "}
          </h1>
          <h1 className="font-bold text-5xl text-gray-800 uppercase tracking-wider mb-1 md:text-8xl">
            30% OFF
          </h1>
          <Button
            href="/products"
            variant="dark"
            sx={{
              mt: "10px",
            }}
          >
            Shop now
          </Button>
        </div>
        <div className="h-full w-full overflow-hidden flex items-center justify-center my-4 lg:my-0">
          <img
            src="/images/hero-1.png"
            alt="Showcase"
            className="inline-block object-contain w-full h-full lg:w-auto lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSlide1;
