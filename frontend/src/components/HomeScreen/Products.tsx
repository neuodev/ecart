import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts';
import LatestProducts from './LatestProducts';

const links = [
  {
    title: 'Featured Products',
    path: '/',
  },
  {
    title: 'Latest Products',
    path: '/latestProducts',
  },
];
const Products = ({ history }) => {
  const [activeTab, setActiveTab] = useState('/');
  return (
    <div className=' '>
      <div className='border-gray-200 mb-4 bg-gray-100  '>
        <div className='container mx-auto -mb-0.5 '>
          <div className='flex items-center space-x-1 font-medium uppercase tracking-wide  '>
            {links.map(link => (
              <button
                onClick={() => setActiveTab(link.path)}
                className={`${
                  activeTab === link.path
                    ? ' bg-green-300 font-medium text-green-900  '
                    : ''
                } ${
                  activeTab !== link.path && 'hover:bg-green-100'
                }  py-4 text-gray-800 
                focus:outline-none px-3
                origin-right rounded-md 
                `}>
                {link.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        {activeTab === '/' ? (
          <FeaturedProducts history={history} />
        ) : (
          activeTab === '/latestProducts' && (
            <LatestProducts history={history} />
          )
        )}
      </div>
    </div>
  );
};

export default Products;
