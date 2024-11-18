import React from "react";
import NewsCard from "../atoms/NewsCard";

const NewsContainer = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4 pb-20 max-w-80 mx-auto">
      {data?.map((data, index) => (
        <NewsCard key={index} data={data} />
      ))}
    </div>
  );
};

export default NewsContainer;
