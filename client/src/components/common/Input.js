import React from "react";

const Input = ({ label, value, onChange, error, name, placeholder }) => {
  return (
    <div>
      <p className="text-gray-400 text-sm mb-0.5">{label}</p>
      <input
        value={value}
        name={name}
        onChange={onChange}
        className="w-full py-2 px-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 border"
        type="text"
        placeholder={placeholder}
      />
      <span className="inline-block w-full h-2 text-xs text-red-500">
        {error}
      </span>
    </div>
  );
};

export default Input;
