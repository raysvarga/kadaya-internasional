import React, { useEffect, useState } from "react";
import Header from "../components/molecules/Header";
import BannerGradient from "../components/atoms/BannerGradient";
import GetingCloserToArrum from "../components/atoms/GetingCloserToArrum";
import CategorySelection from "../components/atoms/CategorySelection";
import ProductTypeSelection from "../components/atoms/ProductTypeSelection";
import ProductContainer from "../components/molecules/ProductContainer";
import Navbar from "../components/atoms/Navbar";
import { useMainContext } from "../context/MainContext";

const Home = () => {
  const {
    setDataToState,
    setFilteredProducts,
    filteredProducts,
    products,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    setOtherSelected,
  } = useMainContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveCategory("");
    setSearchQuery(null);
    setOtherSelected(false);
    // sessionStorage.setItem("productData", JSON.stringify(productJson));
  }, []);

  useEffect(() => {
    setActiveCategory("");
    setSearchQuery(null);
    // sessionStorage.setItem("newsData", JSON.stringify(newsJson));
  }, []);

  useEffect(() => {
    // const savedData = sessionStorage.getItem("productData");
    // const parsed = JSON.parse(savedData);
    // const typeFiltered = parsed.filter((prod) => {
    //   const matched = prod.type.toLowerCase().includes("rekomendasi");
    //   return matched;
    // });

    fetch(`/data/products.json`)
      .then((response) => response.json())
      .then((data) => {
        setDataToState(data);
        const typeFiltered = data.filter((prod) => {
          const matched = prod.type.toLowerCase().includes("rekomendasi");
          return matched;
        });
        return typeFiltered;
      })
      .then((filterd) => {
        setFilteredProducts(filterd);
      })
      .catch((error) =>
        console.error("Error fetching statistics data:", error)
      );

    // if (savedData) {
    //   setDataToState(parsed);
    //   setFilteredProducts(typeFiltered);
    // }
  }, []);

  const filteredProductsSearch = products?.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery?.toLowerCase());
    return matchesSearch;
  });

  return (
    <>
      <Navbar />
      <Header />
      <div className="pb-20">
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className={`${searchQuery ? "hidden" : null} overflow-x-hidden`}>
            <div className="mx-5">
              <BannerGradient />
              <GetingCloserToArrum />
              <CategorySelection category />
              <ProductTypeSelection />
              <div className="mt-5">
                <ProductContainer showCategory productData={filteredProducts} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {searchQuery && (
        <div className="mt-8">
          <ProductContainer showCategory productData={filteredProductsSearch} />
        </div>
      )}
    </>
  );
};

export default Home;
