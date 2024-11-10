import React, { useEffect } from "react";
import Header from "../components/molecules/Header";
import BannerGradient from "../components/atoms/BannerGradient";
import GetingCloserToArrum from "../components/atoms/GetingCloserToArrum";
import CategorySelection from "../components/atoms/CategorySelection";
import ProductTypeSelection from "../components/atoms/ProductTypeSelection";
import ProductContainer from "../components/molecules/ProductContainer";
import Navbar from "../components/atoms/Navbar";
import { useMainContext } from "../context/MainContext";
import productJson from "../data/products.json";

const Home = () => {
  const { setDataToState, setFilteredProducts, products, setActiveCategory } =
    useMainContext();

  useEffect(() => {
    setActiveCategory("");
    localStorage.setItem("productData", JSON.stringify(productJson));
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem("productData");
    if (savedData) {
      setDataToState(JSON.parse(savedData));
      setFilteredProducts(JSON.parse(savedData));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <div className="mx-5">
        <BannerGradient />
        <GetingCloserToArrum />
        <CategorySelection category />
        <ProductTypeSelection />
        <ProductContainer showCategory productData={products?.slice(0, 6)} />
      </div>
    </>
  );
};

export default Home;
