import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { register } from "../actions/user";
import Alert from "../utils/Alert";
import MainNavbar from "../components/HomeScreen/MainNavbar";
import { Button } from "@mui/material";
import { isValidEmail, isValidName, isValidPass } from "../utils/validation";
import Input from "../components/common/Input";

const validators = {
  email: isValidEmail,
  password: isValidPass,
  firstName: isValidName,
  lastName: isValidName,
};

const RegsiterScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const [alert, setAlert] = useState("");
  const { loading, error, userInfo } = useSelector(
    (state) => state.userRegister
  );

  const stateHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    let validator = validators[field];
    if (!validator) throw new Error("Invalid field");
    setErrors({ ...errors, [field]: !validator(value) });
    setState({ ...state, [field]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(state));
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
  }, [error, userInfo, navigate]);

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
              <div className="mb-1">
                <Input
                  error={
                    errors.firstName &&
                    "first name must be at least 3 caracters"
                  }
                  value={state.firstName}
                  name="firstName"
                  label="First name"
                  onChange={stateHandler}
                  placeholder="Jone"
                />
              </div>
              <div className="mb-1">
                <Input
                  error={
                    errors.lastName && "Last name must be at least 3 caracters"
                  }
                  value={state.lastName}
                  name="lastName"
                  label="Last name"
                  onChange={stateHandler}
                  placeholder="Doe"
                />
              </div>
              <div className="mb-1">
                <Input
                  error={errors.email && "Invalid email"}
                  value={state.email}
                  name="email"
                  label="Email"
                  onChange={stateHandler}
                  placeholder="jone@wallet.io"
                />
              </div>
              <div className="mb-1">
                <Input
                  error={
                    errors.password &&
                    "Password must be 8 characters with numbers and alphabet"
                  }
                  value={state.password}
                  name="password"
                  label="Password"
                  onChange={stateHandler}
                  placeholder="jone#!123"
                />
              </div>
              <Button type="submit" variant="dark" fullWidth>
                create an account
              </Button>
              <Button
                LinkComponent={Link}
                to="/login"
                variant="dark-outlined"
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
