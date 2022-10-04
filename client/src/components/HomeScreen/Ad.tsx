import React, { useState } from "react";
import { CloseOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Ad: React.FC<{}> = () => {
  const [open, setOpen] = useState(true);
  const onClick = () => {
    setOpen(false);
  };

  return (
    <div
      className={`${
        open ? "opacity-100 block" : "opacity-0 hidden"
      } transition-opacity duration-300`}
    >
      <div className="w-full text-center bg-green-300 text-green-800 font-bold  text-sm flex items-center justify-between  ">
        <div className="container mx-auto  flex  items-center w-full">
          <div className="w-full flex text-center items-center justify-between">
            <p className="py-4 text-center w-full -mr-4">
              Get Up to 40% OFF New-Season Styles{" "}
              <span className="text-green-500 text-xs hidden md:block lg:inline-block">
                <span className="hidden lg:inline-block">&bull;</span> Limited
                time only
              </span>
            </p>
            <IconButton>
              <CloseOutlined />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
