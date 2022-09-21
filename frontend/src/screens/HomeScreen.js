import React from "react";
import Ad from "../components/HomeScreen/Ad";
import Features from "../components/HomeScreen/Features";
import Features2 from "../components/HomeScreen/Features2";
import Footer from "../components/HomeScreen/Footer";
import MainNavbar from "../components/HomeScreen/MainNavbar";
import MiniNav from "../components/HomeScreen/MiniNav";
import Products from "../components/HomeScreen/Products";
import ProductsCategories from "../components/HomeScreen/ProductsCategories";
import Sales from "../components/HomeScreen/Sales";
import SaveUpTo from "../components/HomeScreen/SaveUpTo";
import Showcase from "../components/HomeScreen/Showcase";
import { useDispatch } from "react-redux";
import { getFeaturedProducts } from "../actions/products";
import { useEffect } from "react";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, []);

  return (
    <div>
      <MainNavbar />
      <Showcase />
      <Features />
      <SaveUpTo />
      <Products />
      <Features2 />
      <Sales />
      <ProductsCategories />
    </div>
  );
};

export default HomeScreen;
