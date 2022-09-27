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
import { Link } from "react-router-dom";
import countries from "../../utils/countries";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { saveShippingAddress } from "../../actions/cart";
import CheckoutSteps from "../common/CheckoutSteps";

const ShippingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingAddress } = useSelector((state) => state.cart);
  const [state, setState] = useState({
    email: shippingAddress.email || "",
    firstName: shippingAddress.firstName || "",
    lastName: shippingAddress.lastName || "",
    address: shippingAddress.address || "",
    city: shippingAddress.city || "",
    postalCode: shippingAddress.postalCode || "",
    country: shippingAddress.country
      ? shippingAddress.country
      : countries[1].name,
    apartment: shippingAddress.apartment || "",
  });

  const [save, setSave] = useState(shippingAddress.save);
  const [openCountries, setOpenCountries] = useState(false);
  // Todo: Remove these states
  const [email, setEmail] = useState(shippingAddress.email || "");
  const [firstName, setFirstName] = useState(shippingAddress.firstName);
  const [lastName, setLastName] = useState(shippingAddress.lastName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(
    shippingAddress.country ? shippingAddress.country : countries[1].name
  );
  const [apartment, setApartment] = useState(shippingAddress.apartment);
  const [alert, setAlert] = useState("");

  const stateHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    if (
      email &&
      firstName &&
      lastName &&
      address &&
      city &&
      postalCode &&
      country &&
      apartment
    ) {
      dispatch(
        saveShippingAddress({
          email,
          firstName,
          lastName,
          address,
          city,
          postalCode,
          country,
          apartment,
          save,
        })
      );
      navigate("/checkouts/shipping");
    } else {
      setAlert("All fields are required");
    }
  };

  const chooseCountry = (countery) => {
    setCountry(countery);
    setOpenCountries(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="py-4">
        <CheckoutSteps currStep={2} />
      </div>
      <div>
        <div>
          {alert && (
            <div className="py-4 font-bold uppercase tracking-wider bg-red-200 text-red-800 rounded-md  text-center mb-4">
              <h1>{alert}</h1>
            </div>
          )}
          <div>
            <h1 className="text-gray-700 text-2xl font-bold mb-5">
              Contact Information
            </h1>
            <div className="flex-col flex">
              <TextField
                onChange={stateHandler}
                value={state.email}
                label="Email"
                name="email"
                placeholder="Your email address"
                size="small"
              />
            </div>
          </div>
          <div className="py-4">
            <h1 className="text-gray-700 text-2xl font-bold mb-5">
              Shipping address
            </h1>
            <div className="md:flex items-center md:space-x-2 mb-5">
              <TextField
                onChange={stateHandler}
                fullWidth
                value={state.firstName}
                label="First name"
                name="firstName"
                placeholder="Your first name"
                size="small"
              />
              <TextField
                onChange={stateHandler}
                value={state.lastName}
                fullWidth
                label="Last name"
                name="lastName"
                placeholder="Your last name"
                size="small"
              />
            </div>
            <div className="mb-5 flex-col flex w-full">
              <TextField
                onChange={stateHandler}
                value={state.address}
                fullWidth
                label="Address"
                name="address"
                placeholder="Enter your address"
                size="small"
              />
              {/* <label htmlFor="address" className="mb-1 font-medium text-sm  ">
                Address
              </label>
              <input
                name="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border py-2 pl-4 focus:outline-none focus:ring-1 focus:ring-green-400 rounded-md w-full bg-gray-50 text-gray-700"
              /> */}
            </div>
            <div className="mb-5 flex-col flex w-full">
              <TextField
                onChange={stateHandler}
                value={state.address}
                fullWidth
                label="Apartment, suite, etc"
                name="apartment"
                placeholder="Enter your apartment"
                size="small"
              />
              {/* <label htmlFor="apartment" className="mb-1 font-medium text-sm  ">
                Apartment, suite, etc.
              </label>
              <input
                name="apartment"
                type="text"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                className="border  py-2 pl-4 focus:outline-none focus:ring-1 focus:ring-green-400 rounded-md w-full bg-gray-50 text-gray-700"
              /> */}
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
              />

              <TextField
                onChange={stateHandler}
                value={state.postalCode}
                fullWidth
                label="Postal code"
                name="postalCode"
                placeholder="Enter your postal code"
                size="small"
              />
            </div>
          </div>
          <div className="mb-5">
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
                onChange={stateHandler}
              >
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
                {countries.map((country) => (
                  <MenuItem value={country.name} dense>
                    {country.name} ({country.code})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="-ml-3 mb-5 flex items-center  space-x-0">
          <Checkbox
            checked={save ? true : false}
            onChange={() => setSave(!save)}
            color="default"
          />{" "}
          <span className="-ml-1 text-sm font-light">
            Save your info for the next time
          </span>
        </div>

        <Button
          onClick={submitHandler}
          variant="dark"
          fullWidth
          sx={{ mb: "16px" }}
        >
          Continue to shipping
        </Button>
        <Button
          LinkComponent={Link}
          to="/cart/1"
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
