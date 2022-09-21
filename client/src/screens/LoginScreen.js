import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../utils/Alert";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { login } from "../actions/user";
import MainNavbar from "../components/HomeScreen/MainNavbar";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("jone@wallet.io");
  const [password, setPassword] = useState("1234567");
  const [alert, setAlert] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAlert("Eamil and password are required");
      return;
    }
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      setAlert(error);
    } else {
      setAlert("");
    }

    if (userInfo && userInfo._id) {
      navigate("/");
    }
  }, [error, userInfo]);

  return (
    <>
      <div className="">
        <MainNavbar history={history} />
      </div>
      <div className="w-full grid grid-cols-12 py-2 container mx-auto -my-5 md:my-10">
        <div
          className="w-full px-4 col-span-12  lg:col-span-4 xl:col-span-3 relative "
          style={{ minHeight: "70vh" }}
        >
          <div className="">
            {loading ? (
              <div className="flex items-center justify-center -mb-20 mt-10">
                <p className="w-10 h-10 bg-blue-400 animate-ping text-center  rounded-full"></p>
              </div>
            ) : (
              alert && (
                <div className="-mb-20 mt-10">
                  <Alert message={alert} type="error" />
                </div>
              )
            )}
          </div>
          <h1 className="font-medium text-lg mb-4 mt-24">Login</h1>
          <form onSubmit={submitHandler}>
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-0.5">Email Address</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  py-2 px-4 rounded-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 border"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mb-5">
              <p className="text-sm text-gray-400 mb-0.5">password</p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full  py-2 px-4 rounded-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 border"
                type="password"
              />
            </div>
            <Link className="inline-block  mb-6  font-medium  text-gray-600 border-b border-transparent hover:border-gray-700">
              Forgot your password ?
            </Link>
            <button className="block  bg-gray-700 w-full py-4 px-4 rounded-sm shadow-md text-white font-bold text-lg   focus:outline-none focus:ring-1 focus:ring-gray-400 mb-6 uppercase tracking-wider leading-tight">
              Login
            </button>
          </form>
          <Link
            to="/register"
            className="block  bg-gray-700 w-full py-3 px-4 rounded-sm shadow-md text-white font-bold text-lg   focus:outline-none focus:ring-1 focus:ring-gray-400 uppercase tracking-wider text-center"
          >
            Register
          </Link>
        </div>
        <div
          className="hidden lg:block col-span-8 xl:col-span-9 "
          id="sideImg"
          style={{
            background: "url(/images/sideImage.jpg) center center/cover ",
          }}
        ></div>
      </div>
    </>
  );
};

export default LoginScreen;
