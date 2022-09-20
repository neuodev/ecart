import React, { useState } from 'react';
import styled from 'styled-components';

const ImageGallary = ({ images }) => {
  const [activeImg, setActiveImg] = useState(0);
  const StyledDiv = styled.div`
    background: url(${images[activeImg]}) no-repeat center center/cover;
    height: 350px;
    width: 90%;
    margin: auto;
    object-fit: 'fill';
  `;

  return (
    <div>
      <StyledDiv></StyledDiv>
      <div className='flex items-center justify-between space-x-2 my-2 px-5 '>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={` w-20  h-full cursor-pointer object-cover ${
              activeImg === idx ? 'border border-gray-900' : ''
            } `}
            onClick={() => setActiveImg(idx)}>
            <img
              src={img}
              className='object-cover w-full h-full'
              alt='Product Name'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallary;
