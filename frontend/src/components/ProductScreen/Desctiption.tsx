import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
const Desctiption = () => {
  return (
    <div className='py-5 px-4 text-gray-700 lg:w-10/12'>
      <p className='font-normal tracking-wide  mb-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat.
      </p>
      <ul className='flex  flex-col justify-center items-start'>
        <li className='flex items-center  space-x-2  font-semibold  mb-4 '>
          <AiFillCheckCircle className='text-lg text-gray-800' />
          <p> Any Product types that You want - Simple, Configurable</p>
        </li>
        <li className='flex items-center  space-x-2  font-semibold mb-4  '>
          <AiFillCheckCircle className='text-lg text-gray-800' />
          <p> Downloadable/Digital Products, Virtual Products</p>
        </li>
        <li className='flex items-center  space-x-2  font-semibold mb-4  '>
          <AiFillCheckCircle className='text-lg text-gray-800' />
          <p> Inventory Management with Backordered items</p>
        </li>
      </ul>
      <p className='text-gray-800 tracking-wide font-light'>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};

export default Desctiption;
