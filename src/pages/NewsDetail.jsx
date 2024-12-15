import NewsDescription from "../components/atoms/NewsDescription";
import Header from "../components/molecules/Header";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState();

  const newsFromLS = localStorage.getItem("newsData");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (newsFromLS) {
      const parsed = JSON.parse(newsFromLS);
      const selected = parsed.find((item) => item.id === parseInt(id));
      setNews(selected);
    }
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
