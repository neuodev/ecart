import React from "react";
import { Breadcrumbs, Tooltip, Typography, useMediaQuery } from "@mui/material";
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
    to: "/checkouts/shipping/",
    tooltip: "Choose your shipping and payment method",
  },
  {
    label: "Payment",
    to: "/checkouts/payment",
    tooltip: "Choose your payment method",
  },
];

const CheckoutSteps: React.FC<{
  currStep: number;
}> = ({ currStep }) => {
  let islg = useMediaQuery("(min-width: 1024px)");

  return (
    <Breadcrumbs separator={<BsChevronCompactRight />}>
      {CHECKOUT_STEPS.map((step, stepIdx) => {
        let link =
          currStep === stepIdx + 1 ? (
            <Link to="#" className="text-xs md:text-sm font-bold text-gray-800">
              {step.label}
            </Link>
          ) : stepIdx + 1 > currStep ? (
            <Link to="#" className="text-xs md:text-sm cursor-not-allowed">
              {step.label}
            </Link>
          ) : (
            <Link to={step.to} className="text-xs md:text-sm">
              {step.label}
            </Link>
          );
        return (
          <Tooltip
            key={stepIdx}
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
      {islg && (
        <Tooltip
          placement="bottom"
          arrow
          title={
            <Typography sx={{ textAlign: "center", fontFamily: "Rubik" }}>
              Complete your order
            </Typography>
          }
        >
          <Link to="#" className="text-xs md:text-sm">
            Complete order
          </Link>
        </Tooltip>
      )}
    </Breadcrumbs>
  );
};

export default CheckoutSteps;
