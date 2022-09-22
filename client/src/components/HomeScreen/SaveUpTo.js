import React from "react";

const banners = [
  {
    img: "/images/home_banner1.jpg",
    savedPrice: "$100",
    text: "on Watch Series",
  },
  {
    img: "/images/home_banner2.jpg",
    savedPrice: "$80",
    text: "on Pods Professional",
  },
  {
    img: "/images/home_banner3.webp",
    savedPrice: "$90",
    text: "on Bluetooth Speaker",
  },
];

const SaveUpTo = () => {
  return (
    <div className="grid grid-cols-12 gap-8 container mx-auto py-4 my-8">
      {banners.map((banner) => (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 relative rounded-xl my-4 overflow-hidden mx-4 max-w-md shadow-2xl cursor-pointer">
          <img
            src={banner.img}
            className="inline-block z-0 overflow-hidden w-full rounded-t-xl"
            alt={banner.text}
          />

          <div className="bg-gray-800 text-center text-white w-full py-2 rounded-b-xl">
            <h1 className=" font-medium leading-tight z-10 text-green-400">
              Save up to
            </h1>
            <h1 className="font-bold text-4xl leading-tight">
              {banner.savedPrice}
            </h1>
            <p className="font-medium">{banner.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SaveUpTo;
