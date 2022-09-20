import React from 'react';
import { Skeleton } from '@material-ui/lab';
const ProductScreenSkeleton = () => {
  return (
    <div className='px-4 '>
      <div className='mb-5'>
        <Skeleton variant='rect' height={200} />
      </div>
      <div className='mb-5'>
        <Skeleton variant='rect' height={80} width={80} />
      </div>
      <div className='mb-5 '>
        <Skeleton variant='text' height={20} width={200} />
        <Skeleton variant='text' height={20} width={150} />
        <Skeleton variant='text' height={20} width={170} />
        <Skeleton variant='text' height={20} width={140} />
      </div>
      <div className='flex items-center justify-center my-4'>
        <Skeleton variant='circle' height={50} width={50} />
        <Skeleton variant='circle' height={50} width={50} />
        <Skeleton variant='circle' height={50} width={50} />
      </div>
      <div className='mb-5'>
        <div className='flex items-center justify-start my-4 space-x-6 '>
          <Skeleton variant='rect' height={40} width={70} />
          <Skeleton variant='rect' height={40} width={70} />
          <Skeleton variant='rect' height={40} width={70} />
        </div>
        <Skeleton variant='text' height={20} />
        <Skeleton variant='text' height={20} />
        <Skeleton variant='text' height={20} />
      </div>
    </div>
  );
};

export default ProductScreenSkeleton;
