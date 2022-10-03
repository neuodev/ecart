import React from "react";
import { Button } from "@mui/material";

const ShowcaseSlide1: React.FC<{}> = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      <div className="container mx-auto h-full w-full flex flex-row">
        <div className="flex items-start justify-center flex-col">
          <h6 className="text-gray-500 font-medium mb-1 text-xl lg:text-2xl">
            Toally Wireless High-Performance{" "}
          </h6>
          <h1 className="text-gray-800 font-bold text-3xl uppercase tracking-wide mb-1 lg:text-5xl">
            Select Headphones{" "}
          </h1>
          <h1 className="font-bold text-7xl text-gray-800 uppercase tracking-wider mb-1 lg:text-8xl">
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
        <div className="mb-10 h-full overflow-hidden pb-6">
          <img
            src="/images/hero-1.png"
            alt="Showcase"
            className="h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSlide1;
