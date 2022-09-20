import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/user';
const links = [
  {
    title: ' My Account',
    link: '/account',
  },
  {
    title: ' Contact Us',
    link: '/',
  },
  {
    title: ' Wishlist',
    link: '/account/wishlist',
  },
  {
    title: 'Log In',
    link: '/login',
  },
];

const MiniNav = () => {
  const { userInfo } = useSelector(state => state.userLogin);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className='bg-gray-100 '>
      <div className='flex flex-row container mx-auto w-full  justify-between items-center px-5 py-1 bg-gray-100'>
        <ul className=' flex flex-row text-sm container mx-auto  space-x-4 font-medium items-center '>
          {links.map((link, idx) => {
            if (userInfo && userInfo._id && link.title === 'Log In') {
              return (
                <li key={idx}>
                  <button
                    onClick={logoutHandler}
                    className='border-b border-transparent hover:border-black pb-1 text-xs md:text-sm font-medium '>
                    Log out
                  </button>
                </li>
              );
            } else {
              return (
                <li key={idx}>
                  <Link
                    to={link.link}
                    className='border-b border-transparent hover:border-black pb-1 text-xs md:text-sm'>
                    {link.title}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
        <div className='flex flex-row items-center justify-center space-x-2 border-l-2 pl-2'>
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default MiniNav;
