import React from "react";
import { Link } from "react-router-dom";

const banners = [
  {
    img: "/images/macbook.jpg",
    savedPrice: "$100",
    text: "on Macbook Pro",
    productId: "632c7373d6bef2a3321a83b9",
  },
  {
    img: "/images/airpods.jpg",
    savedPrice: "$80",
    text: "on AirPods",
    productId: "632c7409d6bef2a3321a83e0",
  },
  {
    img: "/images/apple_watch.jpg",
    savedPrice: "$90",
    text: "on Watch Series",
    productId: "632c6eeed6bef2a3321a8361",
  },
];

const SaveUpTo: React.FC<{}> = () => {
  return (
    <div className="grid grid-cols-12 gap-8 container mx-auto lg:max-w-7xl py-4 my-8 items-center justify-center">
      {banners.map((banner, idx) => (
        <Link
          to={`/product/${banner.productId}`}
          key={idx}
          className="col-span-6 md:col-span-6 lg:col-span-4 relative rounded-xl my-4 overflow-hidden mx-4 max-w-md shadow-xl hover:shadow-2xl transition-shadow duration-300  cursor-pointer"
        >
          <div className="p-4">
            <img
              src={banner.img}
              className="inline-block z-0 overflow-hidden w-96 h-60 md:h-80 object-contain rounded-t-xl"
              alt={banner.text}
            />
          </div>

          <div className="bg-gray-800 text-center text-white w-full py-2 rounded-b-xl">
            <h1 className=" font-medium leading-tight z-10 text-green-400">
              Save up to
            </h1>
            <h1 className="font-bold text-4xl leading-tight">
              {banner.savedPrice}
            </h1>
            <p className="font-medium">{banner.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SaveUpTo;
