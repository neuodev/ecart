import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import { register } from '../actions/user';
import Alert from '../utils/Alert';
import MainNavbar from '../components/HomeScreen/MainNavbar';
const RegsiterScreen = ({ history }) => {
  const [firstName, setFirstName] = useState('Ahmed');
  const [lastName, setLastName] = useState('Ibrahim');
  const [email, setEmail] = useState('ahmed@test.com');
  const [password, setPassword] = useState('123456');
  const [alert, setAlert] = useState('');
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector(state => state.userRegister);
  const submitHandler = e => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setAlert('These fields are required');
      return;
    }
    dispatch(register(firstName, lastName, email, password));
  };

  useEffect(() => {
    if (error) {
      setAlert(error);
    } else {
      setAlert('');
    }
    if (userInfo) {
      history.push('/');
    }
  }, [error, userInfo]);

  return (
    <>
      <div className=''>
        <MainNavbar history={history} />
      </div>
      <div className='w-full grid grid-cols-12 py-2 container mx-auto my-10'>
        <div
          className='w-full px-4 col-span-12  lg:col-span-4 xl:col-span-3 '
          style={{ minHeight: '70vh' }}>
          {loading ? (
            <div className='flex items-center justify-center'>
              <p className='w-10 h-10 bg-blue-400 animate-ping text-center  rounded-full'></p>
            </div>
          ) : (
            alert && (
              <div className='-mb-2'>
                <Alert message={alert} type='error' />
              </div>
            )
          )}
          <div className='px-2'>
            <h1 className='font-medium text-lg mb-2 mt-4 '>Register</h1>
            <form onSubmit={submitHandler}>
              <div className='mb-6'>
                <p className='text-gray-400 text-sm mb-0.5'>First Name</p>
                <input
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className='w-full  py-2 px-4 rounded-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 border'
                  type='text'
                  placeholder=''
                />
              </div>
              <div className='mb-6'>
                <p className='text-gray-400 text-sm mb-0.5'>Last Name</p>
                <input
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  className='w-full  py-2 px-4 rounded-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 border'
                  type='text'
                  placeholder=''
                />
              </div>
              <div className='mb-6'>
                <p className='text-gray-400 text-sm mb-0.5'>Email Address</p>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='w-full  py-2 px-4 rounded-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 border'
                  type='text'
                  placeholder=''
                />
              </div>
              <div className='mb-5'>
                <p className='text-sm text-gray-400 mb-0.5'>password</p>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className='w-full  py-2 px-4 rounded-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 border'
                  type='password'
                />
              </div>
              {/* <Link className='inline-block  mb-6  font-medium  text-gray-600 border-b border-transparent hover:border-gray-700'>
              Forgot your password ?
            </Link> */}
              <button className='block  bg-gray-700 w-full py-4 px-4 rounded-sm shadow-md text-white font-bold text-lg   focus:outline-none focus:ring-1 focus:ring-gray-400 mb-6 uppercase tracking-wider leading-tight'>
                create an account
              </button>
            </form>
            <Link
              to='/login'
              className='block  bg-gray-700 w-full py-3 px-4 rounded-sm shadow-md text-white font-bold text-lg   focus:outline-none focus:ring-1 focus:ring-gray-400 uppercase tracking-wider text-center'>
              Login
            </Link>
          </div>
        </div>
        <div
          className='hidden lg:block col-span-8 xl:col-span-9'
          id='sideImg'
          style={{
            background: 'url(/images/sideImage.jpg) center center/cover ',
          }}></div>
      </div>
    </>
  );
};

export default RegsiterScreen;
