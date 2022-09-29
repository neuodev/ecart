import React from "react";

const Input = ({ label, value, onChange, error, name, placeholder }) => {
  return (
    <div>
      <p
        className={`text-sm mb-0.5 ${error ? "text-red-500" : "text-gray-400"}`}
      >
        {label}
      </p>
      <input
        value={value}
        name={name}
        onChange={onChange}
        className={`w-full py-2 px-4 rounded-sm focus:outline-none focus:ring-1 border ${
          error ? "border-red-500 focus:ring-red-400" : "focus:ring-gray-400"
        }`}
        type="text"
        placeholder={placeholder}
      />
      <span className="block w-full h-2 mt-1 text-xs text-red-500">
        {error}
      </span>
    </div>
  );
};

export default Input;
