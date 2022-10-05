import React from "react";
import { Button } from "@mui/material";

const ShowcaseSlide2: React.FC<{}> = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 pt-4 lg:pt-0">
      <div className="container max-w-screen-lg mx-auto h-full w-full flex flex-col-reverse lg:flex-row">
        <div className="w-full flex items-center lg:items-start justify-center flex-col pb-10">
          <h6 className="text-gray-500 font-medium uppercase text-xl md:text-4xl">
            extra
          </h6>
          <h1 className="font-bold text-6xl text-gray-800 uppercase tracking-wider mb-1 lg:text-7xl">
            50% OFF
          </h1>
          <h1 className="text-gray-800 font-bold text-3xl uppercase tracking-wide mb-4 md:text-5xl">
            Accessories
          </h1>

          <Button
            variant="dark"
            href="/products"
            className="bg-gray-800 text-white py-3 px-4 text-lg uppercase focus:outline-none focus:ring-2 hover:opacity-90 mt-5 inline-block"
          >
            Shop All Sale
          </Button>
        </div>
        <div className="overflow-hidden flex-shrink-0 mx-auto flex items-center justify-center">
          <img
            src="/images/hero-2.png"
            alt="Showcase"
            className="overflow-hidden inline-block h-80 mb-5 lg:mb-0 lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSlide2;
