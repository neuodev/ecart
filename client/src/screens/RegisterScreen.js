import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { register } from "../actions/user";
import Alert from "../utils/Alert";
import MainNavbar from "../components/HomeScreen/MainNavbar";
import { Button } from "@mui/material";

const RegsiterScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("Ahmed");
  const [lastName, setLastName] = useState("Ibrahim");
  const [email, setEmail] = useState("ahmed@test.com");
  const [password, setPassword] = useState("1234567");
  const [alert, setAlert] = useState("");

  const { loading, error, userInfo } = useSelector(
    (state) => state.userRegister
  );

  const submitHandler = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setAlert("These fields are required");
      return;
    }
    dispatch(register(firstName, lastName, email, password));
  };

  useEffect(() => {
    if (error) {
      setAlert(error);
    } else {
      setAlert("");
    }
    if (userInfo) {
      navigate("/");
    }
  }, [error, userInfo]);

  return (
    <>
      <div className="">
        <MainNavbar />
      </div>
      <div className="w-full py-2 max-w-md container mx-auto my-10">
        <div className="w-full px-4" style={{ minHeight: "70vh" }}>
          {loading ? (
            <div className="flex items-center justify-center">
              <p className="w-10 h-10 bg-blue-400 animate-ping text-center  rounded-full"></p>
            </div>
          ) : (
            alert && (
              <div className="mb-2 px-2">
                <Alert message={alert} type="error" />
              </div>
            )
          )}
          <div className="px-2">
            <h1 className="font-medium text-3xl text-center my-6">Register</h1>
            <form onSubmit={submitHandler}>
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-0.5">First Name</p>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full  py-2 px-4 rounded-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 border"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-0.5">Last Name</p>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full  py-2 px-4 rounded-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 border"
                  type="text"
                  placeholder=""
                />
              </div>
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
              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-0.5">Password</p>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full  py-2 px-4 rounded-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 border"
                  type="password"
                />
              </div>
              <Button type="submit" variant="dark" fullWidth>
                create an account
              </Button>
              <Button
                LinkComponent={Link}
                to="/login"
                variant="dark"
                fullWidth
                sx={{ mt: "16px" }}
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegsiterScreen;
