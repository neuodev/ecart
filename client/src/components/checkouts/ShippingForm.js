import { Breadcrumbs, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
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
  const [save, setSave] = useState(shippingAddress.save);
  const [openCountries, setOpenCountries] = useState(false);
  const [alert, setAlert] = useState("");

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
        <div className="py-4">
          {alert && (
            <div className="py-4 font-bold uppercase tracking-wider bg-red-200 text-red-800 rounded-md  text-center mb-4">
              <h1>{alert}</h1>
            </div>
          )}
          <div>
            <h1 className="text-gray-700 text-lg mb-2">Contact Information</h1>
            <div className="flex-col flex ">
              <label htmlFor="Email" className="mb-1 font-medium text-sm  ">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border py-2 pl-4 focus:outline-none focus:ring-1 focus:ring-green-400 rounded-md w-full bg-gray-50 text-gray-700"
              />
            </div>
          </div>
          <div className="py-4 ">
            <h1 className="text-lg text-gray-700 mb-3">Shipping address </h1>
            <div className="md:flex  items-center md:space-x-2">
              <div className="mb-3 flex-col flex  w-full">
                <label
                  htmlFor="first name "
                  className="mb-1 font-medium text-sm  "
                >
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border py-2 pl-4 focus:outline-none focus:ring-1 focus:ring-green-400 rounded-md w-full bg-gray-50 text-gray-700"
                />
              </div>
              <div className="mb-3 flex-col flex w-full">
                <label
                  htmlFor="first name "
                  className="mb-1 font-medium text-sm  "
                >
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border py-2 pl-4 focus:outline-none focus:ring-1 focus:ring-green-400 rounded-md w-full bg-gray-50 text-gray-700"
                />
              </div>
            </div>
            <div className="mb-3 flex-col flex w-full">
              <label
                htmlFor="first name "
                className="mb-1 font-medium text-sm  "
              >
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border py-2 pl-4 focus:outline-none focus:ring-1 focus:ring-green-400 rounded-md w-full bg-gray-50 text-gray-700"
              />
            </div>
            <div className="mb-3 flex-col flex w-full">
              <label
                htmlFor="first name "
                className="mb-1 font-medium text-sm  "
              >
                Apartment, suite, etc.
              </label>
              <input
                type="text"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                className="border  py-2 pl-4 focus:outline-none focus:ring-1 focus:ring-green-400 rounded-md w-full bg-gray-50 text-gray-700"
              />
            </div>
            <div className="md:flex items-center md:space-x-2">
              <div className="mb-3 flex-col flex w-full">
                <label
                  htmlFor="first name "
                  className="mb-1 font-medium text-sm  "
                >
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border py-2 pl-4 focus:outline-none focus:ring-1 focus:ring-green-400 rounded-md w-full bg-gray-50 text-gray-700"
                />
              </div>
              <div className="mb-3 flex-col flex w-full">
                <label
                  htmlFor="first name "
                  className="mb-1 font-medium text-sm  "
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="border py-2 pl-4 focus:outline-none focus:ring-1 focus:ring-green-400 rounded-md w-full bg-gray-50 text-gray-700"
                />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setOpenCountries(true)}
            onMouseLeave={() => setOpenCountries(false)}
            className="mb-3 flex-col flex w-full rounded-md overflow-hidden  "
          >
            <label htmlFor="first name " className="mb-1 font-medium text-sm  ">
              Country/Region
            </label>
            <div className=" py-3 px-3 bg-green-200 rounded-t-md  text-green-900 font-bold text-lg  ">
              {country}
            </div>
            <div
              className={`bg-gray-100 overflow-y-scroll py-2 ${
                !openCountries ? "h-0 opacity-0  " : "block   opacity-100 h-64"
              }  transition-all duration-500 `}
            >
              <div className="">
                {countries.map((country) => (
                  <div
                    onClick={() => chooseCountry(country.name)}
                    className="py-1 px-3 hover:bg-gray-200  cursor-pointer font-medium text-sm"
                  >
                    {country.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-4 mb-4 flex items-center  space-x-0">
          <Checkbox
            checked={save ? true : false}
            onChange={() => setSave(!save)}
            color="default"
          />{" "}
          <span className="-ml-1 text-sm font-light">
            Save this information for next time{" "}
          </span>
        </div>

        <button
          onClick={submitHandler}
          className="block w-full bg-green-400 rounded-sm shadow-md  text-center  py-3 px-4  text-white font-semibold  hover:bg-green-300 transition-colors duration-300 focus:ring-1 focus:ring-green-500  mb-4"
        >
          Continue to shipping
        </button>
        <Link className=" flex items-center justify-center w-full border rounded-sm shadow-md  text-center  py-3 px-4  text-green-500 font-semibold   focus:ring-1 focus:ring-green-500 mb-4 ">
          <BsChevronCompactLeft />
          Return to cart
        </Link>
      </div>
    </div>
  );
};

export default ShippingForm;
