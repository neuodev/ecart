import React from 'react';

const Loader = () => {
  return (
    <div className='w-6 h-6 bg-blue-400 animate-ping rounded-full'>
      <div className='w-6 h-6 bg-blue-400 animate-ping rounded-full'>
        <div className='w-6 h-6 bg-blue-400 animate-ping rounded-full'></div>
      </div>
    </div>
  );
};

export default Loader;
