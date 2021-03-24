import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-800 py-10 px-6'>
      <div className='grid grid-cols-12'>
        <div className='text-gray-200 col-span-12 md:col-span-3'>
          <h1 className='text-xl uppercase tracking-wide mb-2'>
            Contact Info{' '}
          </h1>

          <h1 className='text-sm uppercase  font-medium'>Address: </h1>
          <p className='text-xs  mb-1 text-gray-400'>
            1234 Street Name, City, England
          </p>
          <h1 className='text-sm uppercase  font-medium  '>PHONE: </h1>
          <p className='text-xs mb-1  text-gray-400'>(123) 456-7890</p>
          <h1 className='text-sm uppercase  font-medium  '>EMAIL: </h1>
          <p className='text-xs mb-1 text-gray-400 '>mail@example.com</p>
          <h1 className='text-sm uppercase  font-medium '>
            WORKING DAYS/HOURS:{' '}
          </h1>
          <p className='text-xs mb-1 text-gray-400 '>
            Mon - Sun / 9:00 AM - 8:00 PM
          </p>
          <div className='flex items-center justify-start  space-x-4 my-3'>
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <div className='col-span-12 md:col-span-9  md:flex flex-col justify-between'>
          <div className='md:flex items-center md:border-b-2  pb-10'>
            <div className='text-gray-100 mb-4 '>
              <h1 className='font-bold uppercase  text-xl tracking-wide  mt-4'>
                SUBSCRIBE NEWSLETTER
              </h1>
              <p className='text-sm text-gray-400'>
                Get all the latest information on Events, Sales and Offers. Sign
                up for newsletter today.
              </p>
            </div>
            <div className='flex items-center justify-center w-full'>
              <form className='w-full flex items-center flex-row'>
                <input
                  type='text'
                  placeholder='Email Address '
                  className='w-full py-3 px-5 rounded-l-full bg-gray-700 focus:outline-none '
                />
                <button className='bg-green-500 h-12 px-3 rounded-r-full font-medium uppercase text-gray-100 hover:bg-green-400 '>
                  submit
                </button>
              </form>
            </div>
          </div>
          <div className=' sm:flex  items-center justify-between'>
            <img src='/images/footer.webp' className='mb-4' alt='' />
            <h1 className='text-gray-100 text-xs'>
              © Wallet eCommerce. © 2021. All Rights Reserved
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
