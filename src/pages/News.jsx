import React, { useEffect, useState } from "react";
import Navbar from "../components/atoms/Navbar";
import Header from "../components/molecules/Header";
import NewsCategorySelection from "../components/atoms/NewsCategorySelection";
import NewsCard from "../components/atoms/NewsCard";
// import newsJson from "../data/news.json";
import { useNavigate, useParams } from "react-router-dom";
import NewsContainer from "../components/molecules/NewsContainer";

const News = () => {
  const { cat } = useParams();

  const [activeCategory, setActiveCategory] = useState();

  const [newsData, setNewsData] = useState();

  const [filteredNews, setFilteredNews] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch("/data/news.json"); // Tunggu fetch selesai
      const data = await response.json(); // Tunggu parsing JSON selesai

      let categoryEdited = "";
      switch (cat) {
        case "berita-terkini":
          setNewsData(
            data.filter((product) => product.category === "Berita Terkini")
          );
          break;
        case "pelatihan":
          setNewsData(
            data.filter((product) => product.category === "Pelatihan")
          );
          break;
        case "pendampingan":
          setNewsData(
            data.filter((product) => product.category === "Pendampingan")
          );
          break;
        case "event":
          setNewsData(data.filter((product) => product.category === "Event"));
          break;
        case "inovasi-desa":
          setNewsData(
            data.filter((product) => product.category === "Inovasi Desa")
          );
          break;

        default:
          break;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchData();
  }, [cat]);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <div data-aos="fade-right" data-aos-duration="1000">
          <NewsCategorySelection />
        </div>
        <div className="flex flex-wrap justify-between gap-4 pb-20 max-w-80 mx-auto">
          {newsData ? <NewsContainer data={newsData} /> : null}
        </div>
      </div>
    </>
  );
};

export default News;
