import React, { useEffect, useState } from "react";
import Navbar from "../components/atoms/Navbar";
import Header from "../components/molecules/Header";
import NewsCategorySelection from "../components/atoms/NewsCategorySelection";
import NewsCard from "../components/atoms/NewsCard";
import newsJson from "../data/news.json";
import { useNavigate, useParams } from "react-router-dom";
import NewsContainer from "../components/molecules/NewsContainer";

const News = () => {
  const { cat } = useParams();

  const [activeCategory, setActiveCategory] = useState();

  const [newsData, setNewsData] = useState();

  const [filteredNews, setFilteredNews] = useState();

  useEffect(() => {
    setNewsData(newsJson);
    let categoryEdited = "";
    switch (cat) {
      case "berita-terkini":
        categoryEdited = "Berita Terkini";
        setActiveCategory("Berita Terkini");
        break;
      case "pelatihan":
        categoryEdited = "Pelatihan";
        setActiveCategory("Pelatihan");
        break;
      case "pendampingan":
        categoryEdited = "Pendampingan";
        setActiveCategory("Pendampingan");
        break;
      case "event":
        categoryEdited = "Event";
        setActiveCategory("Event");
        break;
      case "inovasi-desa":
        categoryEdited = "Inovasi Desa";
        setActiveCategory("Inovasi Desa");
        break;

      default:
        break;
    }
    // if (newsData) {
    //   const filtered = newsData?.fiter(
    //     (news) => (news.category = activeCategory)
    //   );
    //   setFilteredNews(filtered);
    // }
  }, [cat]);
  const navigate = useNavigate();

  const filteredCategory = newsJson.filter(
    (product) => product.category === activeCategory
  );

  return (
    <>
      <div>
        {console.log(filteredCategory)}
        <Navbar />
        <Header />
        <NewsCategorySelection />
        <div className="flex flex-wrap justify-between gap-4 pb-20 max-w-80 mx-auto">
          {/* {filteredCategory.map((data, index) => {
            console.log(data);
          })} */}
          <NewsContainer data={filteredCategory} />
        </div>
      </div>
    </>
  );
};

export default News;
