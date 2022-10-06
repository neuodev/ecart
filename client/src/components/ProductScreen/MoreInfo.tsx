import Description from "./Desctiption";
import React, { useState } from "react";
import Reviews from "./Reviews";
import Shipping from "./Shipping";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, useMediaQuery } from "@mui/material";
import { IProduct } from "../../types";

const REVIEW_TAB = "reviews";
const DESC_TAB = "desc";
const SHIPPING_TAB = "shipping";

type TabId = typeof REVIEW_TAB | typeof DESC_TAB | typeof SHIPPING_TAB;

const MoreInfo: React.FC<{
  product: IProduct;
}> = ({ product }) => {
  let numOfReviews = product.reviews.length;
  const TABS: Array<{
    title: string;
    value: TabId;
  }> = [
    {
      title: `Reviews ${numOfReviews !== 0 && `(${numOfReviews})`}`,
      value: REVIEW_TAB,
    },
    {
      title: "Description",
      value: DESC_TAB,
    },
  ];

  const [value, setValue] = React.useState<TabId>(REVIEW_TAB);
  const handleChange = (
    _e: React.SyntheticEvent<Element, Event>,
    newValue: TabId
  ) => {
    setValue(newValue);
  };

  let issm = useMediaQuery("(min-width: 640px)");
  return (
    <div className="min-h-500">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {TABS.map((t) => (
              <Tab label={t.title} value={t.value} key={t.value} />
            ))}
            {issm && <Tab label="Shipping Delivery" value={SHIPPING_TAB} />}
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
