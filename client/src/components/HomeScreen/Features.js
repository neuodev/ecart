import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import "./style.css";

const list = [
  {
    title: "FREE SHIPPING & RETURN",
    subTitle: "Free shipping on all orders over $99",
    icon: <FaShippingFast />,
  },
  {
    title: "MONEY BACK GUARANTEE",
    subTitle: "100% money back guarantee",
    icon: <MdAttachMoney />,
  },
  {
    title: "ONLINE SUPPORT 24/7",
    subTitle: "Lorem ipsum dolor sit amet.",
    icon: <Ri24HoursFill />,
  },
];

const Features = () => {
  return (
    <div id="features" className="border-y-2">
      <div className="container mx-auto px-4 lg:flex justify-between items-center lg:py-7 ">
        {list.map((item) => (
          <div className="flex flex-row items-center justify-start py-2">
            <div className="text-3xl lg:text-2xl text-gray-800 p-2 m-2 border bg-gray-50 rounded-full ">
              {item.icon}
            </div>
            <div className="">
              <h1 className="uppercase tracking-wider font-bold  lg:text-lg leading-tight text-gray-800 ">
                {item.title}
              </h1>
              <p className="font-medium  text-gray-400 text-sm">
                {item.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
