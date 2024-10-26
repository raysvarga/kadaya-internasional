import React from "react";
import Navbar from "../components/atoms/Navbar";
import Header from "../components/molecules/Header";
import NewsCategorySelection from "../components/atoms/NewsCategorySelection";
import NewsCard from "../components/atoms/NewsCard";

const News = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <NewsCategorySelection />
        <div className="flex flex-wrap justify-between gap-4 pb-20 max-w-80 mx-auto">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        </div>
      </div>
    </>
  );
};

export default News;
