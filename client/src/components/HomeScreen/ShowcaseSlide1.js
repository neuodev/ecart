import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ShowcaseSlide1 = () => {
  return (
    <div className=" w-full h-full py-12 relative  " id="slide-container">
      <div className="container mx-auto">
        <div>
          <img src="/images/slider1.webp" alt="Showcase" />
        </div>
        <div className="mt-2 text-center absolute   " id="slide">
          <h6 className="text-gray-500  font-medium mb-1 lg:text-2xl">
            Totally Wireless High-Performance{" "}
          </h6>
          <h1 className="text-gray-800 font-bold text-3xl uppercase tracking-wide mb-1 lg:text-5xl">
            Select Headphones{" "}
          </h1>
          <h1 className="font-bold text-7xl text-gray-800 uppercase tracking-wider mb-1 lg:text-9xl">
            30% OFF
          </h1>
          <Button
            LinkComponent={Link}
            to="/products"
            variant="dark"
            sx={{
              mt: "10px",
            }}
          >
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSlide1;
