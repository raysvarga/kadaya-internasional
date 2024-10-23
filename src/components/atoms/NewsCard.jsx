import React from "react";

const NewsCard = () => {
  return (
    <div className="bg-white w-[150px] h-60 rounded-2xl drop-shadow-md p-3 pt-4 mb-1 relative">
      <div className="flex justify-center">
        <img src="https://placehold.co/150x180" alt="" />
      </div>
      <h4 className="text-sm font-medium mt-2">Judul Berita</h4>
      <p className="text-[10px] opacity-70 leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default NewsCard;
