import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Quantity() {
  let [state, setState] = useState<number>(0);

  const increment = () => {
    if (state === 10) {
      return;
    }
    setState(state++);
  };
  const decrement = () => {
    if (state === 0) {
      return;
    }
    setState(state--);
  };

  return (
    <div className="flex items-center justify-between space-x-3d   my-2">
      <button
        className="border-2 px-3 py-4  focus:outline-none hover:text-gray-50 hover:bg-gray-700 transition-all duration-300 font-medium text-lg "
        onClick={decrement}
      >
        <AiOutlineMinus />
      </button>
      <p className=" font-bold text-lg px-8 py-3 -m-0.5 bg-gray-200 border text-gray-900  ">
        {state}
      </p>
      <button
        onClick={increment}
        className="border-2 px-3 py-4 focus:outline-none hover:text-gray-50
          hover:bg-gray-700 transition-all duration-300 font-medium text-lg "
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
}

export default Quantity;
