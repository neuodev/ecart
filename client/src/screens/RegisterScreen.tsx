import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/user";
import MainNavbar from "../components/HomeScreen/MainNavbar";
import { Button, CircularProgress, Alert, AlertTitle } from "@mui/material";
import {
  EMAIL_ERR,
  FIRST_NAME_ERR,
  isValidEmail,
  isValidName,
  isValidPass,
  LAST_NAME_ERR,
  PASSWORD_ERR,
} from "../utils/validation";
import Input from "../components/common/Input";
import { RootState, useAppDispatch } from "../store";

const validators = {
  email: isValidEmail,
  password: isValidPass,
  firstName: isValidName,
  lastName: isValidName,
};

type FormField = keyof typeof validators;

const RegsiterScreen = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    password: boolean;
  }>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const { loading, error, userInfo } = useSelector<
    RootState,
    RootState["userRegister"]
  >((state) => state.userRegister);

  const stateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name as FormField;
    const value = e.target.value;

    let validator = validators[field];
    if (!validator) throw new Error("Invalid field");
    setErrors({ ...errors, [field]: !validator(value) });
    setState({ ...state, [field]: value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(state));
  };

  const isCurrStateValid = () => {
    for (let field in validators) {
      let f = field as FormField;
      let isValid = validators[f](state[f]);
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
                error={errors.firstName ? FIRST_NAME_ERR : null}
                value={state.firstName}
                name="firstName"
                label="First name"
                onChange={stateHandler}
                placeholder="Jone"
              />
            </div>
            <div className="mb-4">
              <Input
                error={errors.lastName ? LAST_NAME_ERR : null}
                value={state.lastName}
                name="lastName"
                label="Last name"
                onChange={stateHandler}
                placeholder="Doe"
              />
            </div>
            <div className="mb-4">
              <Input
                error={errors.email ? EMAIL_ERR : null}
                value={state.email}
                name="email"
                label="Email"
                onChange={stateHandler}
                placeholder="jone@wallet.io"
              />
            </div>
            <div className="mb-4">
              <Input
                error={errors.password ? PASSWORD_ERR : null}
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
              href="/login"
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
  );
};

export default RegsiterScreen;
