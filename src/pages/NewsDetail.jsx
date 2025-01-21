import NewsDescription from "../components/atoms/NewsDescription";
import Header from "../components/molecules/Header";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch("/data/news.json"); // Tunggu fetch selesai
      const data = await response.json(); // Tunggu parsing JSON selesai

      if (data) {
        const selected = data.find((item) => item.id === parseInt(id));
        setNews(selected);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="w-full mt-5 mb-8 flex flex-col items-center">
        {news?.img ? (
          <img
            src={`/assets/newsImg/${news?.img}`}
            alt=""
            className="object-cover"
          />
        ) : (
          <img
            src={`/assets/productImg/no-pict.png`}
            alt=""
            className="w-[150px] object-cover"
          />
        )}
        <NewsDescription data={news} />
      </div>
    </div>
  );
};

export default NewsDetail;
