import { Breadcrumbs, Tooltip, Typography } from "@mui/material";
import React from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CHECKOUT_STEPS = [
  {
    label: "Cart",
    to: "/cart/1",
    tooltip: "Go to your cart",
  },
  {
    label: "Information",
    to: "/checkouts",
    tooltip: "Fill your address information",
  },
  {
    label: "Shipping",
    to: "/checkouts/payment",
    tooltip: "Choose your shipping and payment method",
  },
  {
    label: "Payment",
    to: "/checkouts/payment",
    tooltip: "Choose your payment method",
  },
  {
    label: "Complete order",
    tooltip: "Confirme your order",
    to: null,
  },
];

const CheckoutSteps = ({ currStep }) => {
  return (
    <Breadcrumbs separator={<BsChevronCompactRight />}>
      {CHECKOUT_STEPS.map((step, stepIdx) => {
        let link =
          currStep === stepIdx + 1 ? (
            <Link className="text-xs md:text-sm font-bold text-gray-800">
              {step.label}
            </Link>
          ) : stepIdx + 1 > currStep ? (
            <Link className="text-xs md:text-sm cursor-not-allowed">
              {" "}
              {step.label}{" "}
            </Link>
          ) : (
            <Link to={step.to} className="text-xs md:text-sm">
              {" "}
              {step.label}{" "}
            </Link>
          );
        return (
          <Tooltip
            placement="bottom"
            arrow
            title={
              <Typography sx={{ textAlign: "center", fontFamily: "Rubik" }}>
                {step.tooltip}
              </Typography>
            }
          >
            {link}
          </Tooltip>
        );
      })}
    </Breadcrumbs>
  );
};

export default CheckoutSteps;
