import { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import countries from "../../constants/countries.json";
import { saveShippingAddress } from "../../actions/cart";
import CheckoutSteps from "../common/CheckoutSteps";
import {
  atLeastOfLength,
  isValidEmail,
  isValidName,
  isValidPostalCode,
  notEmpty,
} from "../../utils/validation";
import { useAppDispatch, useAppSelector } from "../../store";
import { ShippingAddr } from "../../types";

const validators = {
  email: isValidEmail,
  firstName: isValidName,
  lastName: isValidName,
  address: (val: string) => atLeastOfLength(val, 5),
  city: (val: string) => atLeastOfLength(val, 3),
  postalCode: isValidPostalCode,
  country: notEmpty,
  apartment: (val: string) => atLeastOfLength(val, 5),
};

type FormField = keyof typeof validators;

const ShippingForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { shippingAddress } = useAppSelector((state) => state.cart);
  const { userInfo } = useAppSelector((state) => state.userLogin);

  const [state, setState] = useState<ShippingAddr>({
    email: shippingAddress?.email || (userInfo && userInfo.email) || "",
    firstName: shippingAddress?.firstName || "",
    lastName: shippingAddress?.lastName || "",
    address: shippingAddress?.address || "",
    city: shippingAddress?.city || "",
    postalCode: shippingAddress?.postalCode || "",
    country: shippingAddress?.country
      ? shippingAddress?.country
      : countries[1].name,
    apartment: shippingAddress?.apartment || "",
    save: shippingAddress?.save === true,
  });

  const [errors, setErrors] = useState({
    email: false,
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    postalCode: false,
    apartment: false,
    save: false,
  });

  const stateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let field = e.target.name as FormField;
    let value = e.target.value;

    let isValid = validators[field];
    if (!isValid) throw new Error(`'${field}' has not validator`);
    setErrors({ ...errors, [field]: !isValid(value) });
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    dispatch(saveShippingAddress(state));
    navigate("/checkouts/shipping");
  };

  const isCurrStateValid = () => {
    for (let field in validators) {
      let f = field as FormField;
      let isValid = validators[f](state[f]);
      if (!isValid) return false;
    }

    return true;
  };

  return (
    <div className="container mx-auto px-4 mb-12">
      <div>
        <div>
          <div>
            <h1 className="text-gray-700 text-2xl font-bold mb-5">
              Contact Information
            </h1>
            <div className="flex-col flex items-start">
              <TextField
                onChange={stateHandler}
                value={state.email}
                fullWidth
                error={errors.email}
                helperText={errors.email ? "Please enter a valid email" : " "}
                label="Email"
                name="email"
                placeholder="Your email address"
                size="small"
              />
            </div>
          </div>
          <div className="pb-4">
            <h1 className="text-gray-700 text-2xl font-bold mb-5">
              Shipping address
            </h1>
            <div className="md:flex items-start md:space-x-2 mb-2">
              <TextField
                onChange={stateHandler}
                fullWidth
                value={state.firstName}
                label="First name"
                name="firstName"
                placeholder="Your first name"
                size="small"
                error={errors.firstName}
                helperText={
                  errors.firstName ? "Name must be at least 3 characters" : " "
                }
              />
              <TextField
                onChange={stateHandler}
                value={state.lastName}
                fullWidth
                label="Last name"
                name="lastName"
                placeholder="Your last name"
                size="small"
                error={errors.lastName}
                helperText={
                  errors.lastName ? "Name must be at least 3 characters" : " "
                }
              />
            </div>
            <div className="mb-2 flex-col flex w-full">
              <TextField
                onChange={stateHandler}
                value={state.address}
                fullWidth
                label="Address"
                name="address"
                placeholder="Enter your address"
                size="small"
                error={errors.address}
                helperText={errors.address ? "Too short, pelase retype" : " "}
              />
            </div>
            <div className="mb-2 flex-col flex w-full">
              <TextField
                onChange={stateHandler}
                value={state.apartment}
                fullWidth
                label="Apartment, suite, etc"
                name="apartment"
                placeholder="Enter your apartment"
                size="small"
                error={errors.apartment}
                helperText={errors.apartment ? "Too short, please retype" : " "}
              />
            </div>
            <div className="md:flex items-center md:space-x-2">
              <TextField
                onChange={stateHandler}
                value={state.city}
                fullWidth
                label="City"
                name="city"
                placeholder="Enter your city"
                size="small"
                error={errors.city}
                helperText={errors.city ? "Too short, please retype" : " "}
              />

              <TextField
                onChange={stateHandler}
                value={state.postalCode}
                fullWidth
                label="Postal code"
                name="postalCode"
                placeholder="Enter your postal code"
                size="small"
                error={errors.postalCode}
                helperText={
                  errors.postalCode ? "Invalid postal code, please retype" : " "
                }
              />
            </div>
          </div>
          <div className="mb-2">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Country/Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state.country}
                name="country"
                size="small"
                label="Country/Region"
                onChange={stateHandler as any}
              >
                {countries.map((country: { name: string; code: string }) => (
                  <MenuItem key={country.name} value={country.name} dense>
                    {country.name} ({country.code})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="-ml-3 mb-5 flex items-center  space-x-0">
          <Checkbox
            checked={state.save}
            value={state.save}
            name="save"
            onChange={() => setState({ ...state, save: !state.save })}
            color="default"
          />{" "}
          <span className="-ml-1 text-sm font-light">
            Save your info for the next time
          </span>
        </div>

        <Button
          onClick={submitHandler}
          disabled={!isCurrStateValid()}
          variant="dark"
          fullWidth
          sx={{ mb: "16px" }}
        >
          Continue to shipping
        </Button>
        <Button
          href="/cart/1"
          startIcon={<BsChevronCompactLeft />}
          onClick={submitHandler}
          variant="dark-outlined"
          size="small"
          sx={{
            padding: "12px 20px",
          }}
          fullWidth
        >
          Return to cart
        </Button>
      </div>
    </div>
  );
};

export default ShippingForm;
