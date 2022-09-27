import { Tab } from "@mui/material";
import React, { useState } from "react";
import FeaturedProducts from "./FeaturedProducts";
import LatestProducts from "./LatestProducts";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box } from "@mui/system";

const Products = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="">
      <div>
        <TabContext value={activeTab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={(_, value) => {
                setActiveTab(value);
              }}
              centered
              aria-label="Products list"
              sx={{
                "& .MuiTabs-indicator": {
                  bgcolor: "#34d399",
                },
              }}
            >
              <Tab variant="main" label="Featured Products" value={"1"} />
              <Tab variant="main" label="Latest Products" value={"2"} />
            </TabList>
          </Box>
          <TabPanel value={"1"}>
            <FeaturedProducts />
          </TabPanel>
          <TabPanel value={"2"}>
            <LatestProducts />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Products;
