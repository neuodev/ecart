import React from "react";
import { Link } from "react-router-dom";

const Sales: React.FC<{}> = () => {
  return (
    <div
      style={{
        background: "url(/images/parrallex.jpg) no-repeat center center /cover",
      }}
      className="mb-4"
    >
      <div className="container mx-auto h-60 flex items-center justify-start md:justify-center">
        <div
          className="ml-4  md:flex items-center justify-between"
          style={{ width: "900px" }}
        >
          <h1 className="font-bold text-2xl mb-1 lg:text-4xl">
            TOP ELECTRONIC DEALS
          </h1>
          <Link
            to="/products"
            className="inline-block bg-gray-700 text-white py-2 px-5 rounded font-medium uppercase  lg:py-3 lg:px-5 lg:text-xl  focus:outline-none focus:ring-2"
          >
            view Sale
          </Link>
          <div className="mt-4 ">
            <span className="text-green-800  inline-block bg-green-50 transform -rotate-12 px-3 py-4 uppercase  rounded-md  font-bold mb-3">
              Exclusive COUPON
            </span>
            <div className="flex items-center  ml-5">
              <span className="uppercase text-xs inline-block transform -rotate-90 mx-0 lg:text-white -mr-2">
                up to{" "}
              </span>
              <div className="bg-red-500 py-0.5 px-1 text-2xl text-white ml-0 mx-1 font-bold">
                $100
              </div>
              <span className="uppercase text-lg lg:text-2xl lg:text-white">
                off
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
