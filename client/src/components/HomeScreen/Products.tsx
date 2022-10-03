import { Tab } from "@mui/material";
import React, { useState } from "react";
import FeaturedProducts from "./FeaturedProducts";
import LatestProducts from "./LatestProducts";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box } from "@mui/system";

enum TabId {
  Featured = "1",
  Latest = "2",
}

const Products = () => {
  const [activeTab, setActiveTab] = useState(TabId.Featured);

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
              <Tab label="Featured Products" value={TabId.Featured} />
              <Tab label="Latest Products" value={TabId.Latest} />
            </TabList>
          </Box>
          <TabPanel value={TabId.Featured}>
            <FeaturedProducts />
          </TabPanel>
          <TabPanel value={TabId.Latest}>
            <LatestProducts />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Products;
