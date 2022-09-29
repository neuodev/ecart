import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";

const Input = ({ label, value, onChange, error, name, placeholder, type }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p
        className={`text-sm mb-0.5 ${error ? "text-red-500" : "text-gray-400"}`}
      >
        {label}
      </p>
      <div className="relative bg-yellow-100 border">
        <input
          value={value}
          name={name}
          onChange={onChange}
          className={`w-full py-2 px-4 rounded-sm focus:outline-none focus:ring-1 border ${
            error ? "border-red-500 focus:ring-red-400" : "focus:ring-gray-400"
          }`}
          type={show === true ? "text" : type || "text"}
          placeholder={placeholder}
        />
        {type === "password" && (
          <div className="absolute top-1/2 right-2 -translate-y-1/2  z-10">
            <IconButton onClick={() => setShow(!show)}>
              {!show ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
            </IconButton>
          </div>
        )}
      </div>
      <span className="block w-full h-2 mt-1 text-xs text-red-500">
        {error}
      </span>
    </div>
  );
};

export default Input;
