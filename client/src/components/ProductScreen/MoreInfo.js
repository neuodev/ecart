import Description from "./Desctiption";
import React, { useState } from "react";
import Reviews from "./Reviews";
import Shipping from "./Shipping";

const MoreInfo = ({ product, history }) => {
  let [activeTab, setActiveTab] = useState("reviews");

  return (
    <div>
      <div className="flex flex-row items-center space-x-5 px-3 ">
        <button
          onClick={() => {
            setActiveTab("reviews");
          }}
          className={`${
            activeTab === "reviews" && "text-gray-800 border-gray-800"
          } font-medium uppercase  tracking-wider border-b-2  text-gray-400 focus:outline-none  `}
        >
          Reviews ({product.reviews.length})
        </button>
        <button
          onClick={() => {
            setActiveTab("descrtiption");
          }}
          className={`${
            activeTab === "descrtiption" && "text-gray-800 border-gray-800"
          } font-medium uppercase  tracking-wider border-b-2  text-gray-400  focus:outline-none`}
        >
          Description
        </button>

        <button
          onClick={() => {
            setActiveTab("shipping");
          }}
          className={`${
            activeTab === "shipping" && "text-gray-800 border-gray-800"
          } font-medium uppercase  tracking-wider border-b-2  text-gray-400 focus:outline-none `}
        >
          Shipping Delivery
        </button>
      </div>

      {activeTab === "descrtiption" ? (
        <Description />
      ) : activeTab === "reviews" ? (
        <Reviews
          history={history}
          reviews={product.reviews}
          productId={product._id}
        />
      ) : (
        <Shipping />
      )}
    </div>
  );
};

export default MoreInfo;
