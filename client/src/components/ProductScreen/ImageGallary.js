import React, { useState } from "react";

const ImageGallary = ({ images, name }) => {
  const [activeImgIdx, setActiveImg] = useState(0);

  return (
    <div>
      <img
        className="max-h-96 w-full inline-block overflow-hidden object-contain p-3"
        src={images[activeImgIdx]}
        alt={name}
      />
      <div className="flex items-center justify-between space-x-2 my-2 px-5 mt-8">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`w-16 h-16 cursor-pointer ${
              activeImgIdx === idx ? "border border-gray-900" : ""
            } `}
            onClick={() => setActiveImg(idx)}
          >
            <img
              src={img}
              className="object-contain p-1 w-full h-full rounded-sm"
              alt={name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallary;
