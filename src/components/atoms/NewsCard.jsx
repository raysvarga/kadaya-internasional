import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ data }) => {
  return (
    <Link
      to={`/news-detail/${data.id}`}
      className="bg-white w-[150px] rounded-2xl drop-shadow-md p-3 pt-4 mb-1 relative"
    >
      <div className="flex justify-center">
        {data.img ? (
          <img
            src={`/assets/newsImg/${data.img}`}
            alt={`${data.title}`}
            className="w-[150px] text-xs"
          />
        ) : (
          <img
            src={`/assets/productImg/no-pict.png`}
            alt={`${data.title}`}
            className="w-[150px] text-xs"
          />
        )}
      </div>
      <h4 className="text-xs font-medium mt-2">
        {data?.title.length > 25
          ? `${data.title.substring(0, 25)}...`
          : data.title}
      </h4>
      <p className="text-[10px] opacity-70 leading-tight mt-2">
        {data?.desc.length > 30
          ? `${data.desc.substring(0, 30)}...`
          : data.desc}
      </p>
    </Link>
  );
};

export default NewsCard;
