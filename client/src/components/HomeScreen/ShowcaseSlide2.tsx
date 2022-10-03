import React from "react";
import { Button } from "@mui/material";

const ShowcaseSlide2: React.FC<{}> = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="container max-w-screen-lg  mx-auto h-full w-full flex flex-row">
        <div className="w-full flex items-start justify-center flex-col">
          <h6 className="text-gray-500 font-medium uppercase text-xl lg:text-4xl">
            extra
          </h6>
          <h1 className="font-bold text-7xl text-gray-800 uppercase tracking-wider mb-1 lg:text-7xl">
            50% OFF
          </h1>
          <h1 className="text-gray-800 font-bold text-3xl uppercase tracking-wide mb-4 lg:text-5xl">
            Accessories
          </h1>

          <Button
            variant="dark"
            href="/products"
            className="bg-gray-800 text-white  py-3 px-4 text-lg uppercase focus:outline-none focus:ring-2 hover:opacity-90 mt-5 inline-block"
          >
            Shop All Sale
          </Button>
        </div>
        <div className="h-full overflow-hidden flex-shrink-0">
          <img
            src="/images/hero-3.jpeg"
            alt="Showcase"
            className="h-full mb-10 overflow-hidden pb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSlide2;