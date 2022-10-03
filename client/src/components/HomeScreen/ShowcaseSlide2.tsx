import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./style.css";

const ShowcaseSlide2: React.FC<{}> = () => {
  return (
    <div
      className="w-full h-full py-12 flex items-center justify-center relative"
      id="slide-container"
    >
      <div className="h-100">
        <div className="absolute top-0 right-48">
          <img src="/images/slider2.webp" alt="Showcase" />
        </div>
        <div className="mt-2 absolute top-0 left-64 w-full h-full">
          <h6 className="text-gray-500 font-medium uppercase text-xl lg:text-4xl lg:mt-24">
            extra
          </h6>
          <h1 className="font-bold text-7xl text-gray-800 uppercase tracking-wider  mb-1 lg:text-7xl">
            50% OFF
          </h1>
          <h1 className="text-gray-800 font-bold text-3xl uppercase tracking-wide mb-4  lg:text-5xl ">
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
      </div>
    </div>
  );
};

export default ShowcaseSlide2;
