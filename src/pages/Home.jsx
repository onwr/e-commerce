import React from "react";
import Header from "../components/Header";
import CategoriesNav from "../components/home/CategoriesNav";
import TopCategories from "../components/home/TopCategories";
import TopProducts from "../components/home/TopProducts";

const Home = () => {
  return (
    <div>
      <Header />
      <CategoriesNav />
      <TopCategories />
      <TopProducts />
    </div>
  );
};

export default Home;
