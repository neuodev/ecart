import React from "react";
import { Box } from "@mui/material";
import Ad from "../HomeScreen/Ad";
import MiniNav from "../HomeScreen/MiniNav";
import Footer from "../HomeScreen/Footer";
import { Outlet } from "react-router-dom";
import MainNavbar from "../HomeScreen/MainNavbar";

const Root = () => {
  return (
    <Box>
      <Ad />
      <MiniNav />
      <MainNavbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Root;
