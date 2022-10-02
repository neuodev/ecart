import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/user";
import MainNavbar from "../components/HomeScreen/MainNavbar";
import { Button, CircularProgress, Alert, AlertTitle } from "@mui/material";
import {
  EMAIL_ERR,
  isValidEmail,
  isValidName,
  isValidPass,
  PASSWORD_ERR,
} from "../utils/validation";
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

  const isCurrStateValid = () => {
    for (let field in validators) {
      let isValid = validators[field](state[field]);
      if (!isValid) return false;
    }

    return true;
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [error, userInfo, navigate]);

  return (
    <>
      <MainNavbar />
      <div className="w-full py-2 max-w-md container mx-auto my-10">
        <div className="w-full px-4 min-h-700">
          <div className="px-2">
            <h1 className="font-medium text-3xl text-center my-6">Register</h1>
            {error && (
              <div className="mb-6">
                <Alert color="error">
                  <AlertTitle>Error</AlertTitle>
                  {error}
                </Alert>
              </div>
            )}
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <Input
                  error={
                    errors.firstName &&
                    "First name must be at least 3 caracters"
                  }
                  value={state.firstName}
                  name="firstName"
                  label="First name"
                  onChange={stateHandler}
                  placeholder="Jone"
                />
              </div>
              <div className="mb-4">
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
              <div className="mb-4">
                <Input
                  error={errors.email && EMAIL_ERR}
                  value={state.email}
                  name="email"
                  label="Email"
                  onChange={stateHandler}
                  placeholder="jone@wallet.io"
                />
              </div>
              <div className="mb-4">
                <Input
                  error={errors.password && PASSWORD_ERR}
                  value={state.password}
                  name="password"
                  label="Password"
                  type="password"
                  onChange={stateHandler}
                  placeholder="jone#!123"
                />
              </div>
              <Button
                disabled={!isCurrStateValid() || loading}
                type="submit"
                variant="dark"
                fullWidth
              >
                {loading ? (
                  <CircularProgress size={20} sx={{ color: "#ffffff" }} />
                ) : (
                  "Create an account"
                )}
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
