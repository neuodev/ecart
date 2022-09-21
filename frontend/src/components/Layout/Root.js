import React from "react";
import { Box } from "@mui/material";
import Ad from "../HomeScreen/Ad";
import MiniNav from "../HomeScreen/MiniNav";
import Footer from "../HomeScreen/Footer";
import { Outlet } from "react-router-dom";

const Root = (props) => {
  return (
    <Box>
      <Ad />
      <MiniNav />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Root;
