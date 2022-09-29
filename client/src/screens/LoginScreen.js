import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { login } from "../actions/user";
import MainNavbar from "../components/HomeScreen/MainNavbar";
import {
  AlertTitle,
  Button,
  CircularProgress,
  Tooltip,
  Typography,
  Alert,
} from "@mui/material";
import {
  EMAIL_ERR,
  isValidEmail,
  isValidPass,
  PASSWORD_ERR,
} from "../utils/validation";
import { USER_LOGIN_RESET } from "../actions/actionTypes";
import Input from "../components/common/Input";

const validators = {
  email: isValidEmail,
  password: isValidPass,
};

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const updateStateHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    if (!field) throw new Error("Field name is required");

    let validator = validators[field];
    if (!validator) throw new Error(`${field} validator is missing`);

    let isValid = validator(value);
    setErrors({ ...errors, [field]: !isValid });
    setState({ ...state, [field]: value });
  };

  const isCurrStateValid = () => {
    for (let field in validators) {
      let isValid = validators[field](state[field]);
      if (!isValid) return false;
    }

    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(state.email, state.password));
  };

  useEffect(() => {
    if (userInfo && userInfo._id) {
      navigate("/");
    }
  }, [error, userInfo, navigate]);

  useEffect(() => {
    return () => {
      dispatch({ type: USER_LOGIN_RESET });
    };
  }, []);

  return (
    <>
      <MainNavbar />
      <div className="w-full flex items-center justify-center py-2 container mx-auto">
        <div className="px-4 relative w-96 min-h-700">
          <h1 className="font-medium text-3xl mb-4 mt-24 text-center">Login</h1>
          {error && (
            <div className="mb-4">
              <Alert color="error">
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            </div>
          )}

          <form onSubmit={submitHandler}>
            <div className="mb-5">
              <Input
                value={state.email}
                name="email"
                onChange={updateStateHandler}
                type="text"
                placeholder="jone@wallet.io"
                label="Email"
                error={errors.email && EMAIL_ERR}
              />
            </div>
            <div className="mb-5">
              <Input
                error={errors.password && PASSWORD_ERR}
                type="password"
                label="Password"
                placeholder="jone#!123"
                value={state.password}
                name="password"
                onChange={updateStateHandler}
              />
            </div>
            <Tooltip
              arrow
              placement="top"
              followCursor
              title={<Typography>Comming Soon!</Typography>}
            >
              <Link className="inline-block mb-3 font-medium text-gray-600 border-b border-transparent hover:border-gray-700">
                Forgot your password ?
              </Link>
            </Tooltip>

            <Button
              type="submit"
              sx={{ mb: "12px" }}
              variant="dark"
              fullWidth
              disabled={!isCurrStateValid() || loading}
            >
              {loading ? (
                <CircularProgress size={20} sx={{ color: "#ffffff" }} />
              ) : (
                "Login"
              )}
            </Button>
          </form>
          <Button
            LinkComponent={Link}
            to="/register"
            variant="dark-outlined"
            fullWidth
          >
            Register
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
