import React from 'react';
import ProductCard from '../HomeScreen/ProductCard';
const data = [
  {
    title:
      'BenQ EW3280U 32 inch 4K Monitor | IPS | Multi Media with HDMI connectivity HDR Eye-Care Integrated Speakers and Custom Audio Modes',
    rating: '4.5',
    price: '699.99',
    images: ['/images/benQ.webp', '/images/benQ2.jpg'],
  },
  {
    title: 'Computer Mouse',
    rating: '3.5',
    price: '40.30',
    images: ['/images/mouse.jpg', '/images/mouse2.jpg'],
  },
  {
    title:
      'Samsung Galaxy S21 Ultra 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 108MP High Res | 512GB, Phantom Black (SM-G998UZKFXAA)',
    rating: '3',
    price: '100.50',
    images: ['/images/samsung1.jpg', '/images/samsung2.jpg'],
  },
  {
    title: 'Gaming Headset',
    rating: '4.5',
    price: '200.00',
    images: ['/images/gamingHeadSet1.webp', '/images/gamingHeadSet2.webp'],
  },
  {
    title: 'Iphone',
    rating: '5',
    price: '$72.64',
    images: ['/images/iphone.webp', '/images/iphone2.webp'],
  },
];
const RecentlyViewed = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='py-6 px-5 bg-gray-100 rounded-sm  mt-4  text-gray-700 font-medium'>
        Recently viewed
      </h1>
      <div className=' flex  items-center flex-wrap'>
        {data.map(item => (
          <div className='mx-auto'>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
