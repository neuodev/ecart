import React from 'react';
import { FaHeadset } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import { TiArrowBackOutline } from 'react-icons/ti';
const list = [
  {
    icon: <FaHeadset />,
    h1: 'CUSTOMER SUPPORT',
    subHeading: 'Need Assistence?',
    p:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.',
  },
  {
    icon: <MdPayment />,
    h1: 'SECURED PAYMENT',
    subHeading: 'Safe & Fast',
    p:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.',
  },
  {
    icon: <TiArrowBackOutline />,
    h1: 'RETURNS',
    subHeading: 'Easy & Free',
    p:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.',
  },
];

const Features2 = () => {
  return (
    <div className='container mx-auto mt-12 '>
      <div className='grid grid-cols-12 gap-4 mb-4'>
        {list.map((item, idx) => (
          <div
            className='col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-center justify-between text-center mx-4'
            ke={idx}>
            <div className='bg-green-50 p-5 rounded-full mb-4'>
              <i className='text-2xl  text-green-400 '>{item.icon}</i>
            </div>
            <h1 className='text-lg uppercase font-medium tracking-wide leading-tight mb-1'>{item.h1}</h1>
            <h2 className='text-sm font-medium text-gray-500 mb-4'>{item.subHeading}</h2>
            <p className='font-light  '>{item.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features2;
