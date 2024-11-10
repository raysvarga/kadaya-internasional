import React, { useEffect, useState } from "react";
import Navbar from "../components/atoms/Navbar";
import Header from "../components/molecules/Header";
import NewsCategorySelection from "../components/atoms/NewsCategorySelection";
import NewsCard from "../components/atoms/NewsCard";
import newsJson from "../data/news.json";
import { useNavigate } from "react-router-dom";

const News = () => {
  const [newsData, setNewsData] = useState();
  useEffect(() => {
    setNewsData(newsJson);
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <NewsCategorySelection />
        <div className="flex flex-wrap justify-between gap-4 pb-20 max-w-80 mx-auto">
          <div onClick={() => navigate("/news-detail")}>
            <NewsCard data={newsData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
