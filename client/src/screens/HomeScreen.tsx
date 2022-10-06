import React from "react";
import Features from "../components/HomeScreen/Features";
import Services from "../components/HomeScreen/Services";
import Products from "../components/HomeScreen/Products";
import ProductsCategories from "../components/HomeScreen/ProductsCategories";
import Showcase from "../components/HomeScreen/Showcase";
import { getFeaturedProducts } from "../actions/products";
import { useEffect } from "react";
import { useAppDispatch } from "../store";

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, []);

  return (
    <div>
      <Showcase />
      <Features />
      <Products />
      <Services />
      <ProductsCategories />
    </div>
  );
};

export default HomeScreen;
