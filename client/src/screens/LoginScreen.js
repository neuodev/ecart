import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../utils/Alert";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { login } from "../actions/user";
import MainNavbar from "../components/HomeScreen/MainNavbar";
import { Button, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";

const LoginScreen = () => {
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
      <MainNavbar />
      <div className="w-full flex items-center justify-center py-2 container mx-auto">
        <div className="px-4 relative w-96" style={{ minHeight: "70vh" }}>
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
          <h1 className="font-medium text-3xl mb-4 mt-24 text-center">Login</h1>
          <form onSubmit={submitHandler}>
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-0.5">Email</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  py-2 px-4 rounded-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 border"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mb-5">
              <p className="text-sm text-gray-400 mb-0.5">Password</p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full  py-2 px-4 rounded-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 border"
                type="password"
              />
            </div>
            <Tooltip
              arrow
              placement="top"
              followCursor
              title={<Typography>Comming Soon</Typography>}
            >
              <Link className="inline-block  mb-6  font-medium text-gray-600 border-b border-transparent hover:border-gray-700">
                Forgot your password ?
              </Link>
            </Tooltip>

            <Button type="submit" sx={{ mb: "24px" }} variant="dark" fullWidth>
              Login
            </Button>
          </form>
          <Button LinkComponent={Link} to="/register" variant="dark" fullWidth>
            Register
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
