import React from "react";
import Header from "../components/molecules/Header";
import BannerGradient from "../components/atoms/BannerGradient";
import GetingCloserToArrum from "../components/atoms/GetingCloserToArrum";
import CategorySelection from "../components/atoms/CategorySelection";
import ProductTypeSelection from "../components/atoms/ProductTypeSelection";
import ProductContainer from "../components/molecules/ProductContainer";
import Navbar from "../components/atoms/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="mx-5">
        <BannerGradient />
        <GetingCloserToArrum />
        <CategorySelection category />
        <ProductTypeSelection />
        <ProductContainer showCategory />
      </div>
    </>
  );
};

export default Home;
