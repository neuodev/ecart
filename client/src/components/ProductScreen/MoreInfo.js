import Description from "./Desctiption";
import React, { useState } from "react";
import Reviews from "./Reviews";
import Shipping from "./Shipping";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";

const REVIEW_TAB = "reviews";
const DESC_TAB = "desc";
const SHIPPING_TAB = "shipping";

const MoreInfo = ({ product }) => {
  let numOfReviews = product.reviews.length;
  const TABS = [
    {
      title: `Reviews ${numOfReviews !== 0 && `(${numOfReviews})`}`,
      value: REVIEW_TAB,
    },
    {
      title: "Description",
      value: DESC_TAB,
    },
    {
      title: "Shipping Delivery",
      value: SHIPPING_TAB,
    },
  ];

  const [value, setValue] = React.useState(REVIEW_TAB);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="min-h-500">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {TABS.map((t) => (
              <Tab label={t.title} value={t.value} />
            ))}
          </TabList>
        </Box>
        <TabPanel value={REVIEW_TAB}>
          <Reviews reviews={product.reviews} productId={product._id} />
        </TabPanel>
        <TabPanel value={DESC_TAB}>
          <Description />
        </TabPanel>
        <TabPanel value={SHIPPING_TAB}>
          <div className="max-w-md leading-loose">
            <Shipping />
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default MoreInfo;
