import React from "react";

const NewsDescription = ({ data }) => {
  return (
    <>
      <div className="w-full mt-5 grid place-content-center relative">
        <p className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-[#fafafa] px-5 py-2 rounded-xl font-medium text-base text-[#a60505]">
          {data?.category || "Kategori tidak tersedia"}
        </p>
      </div>
      <div className="px-5 mt-2 flex flex-col items-center gap-2">
        <h1 className="font-semibold text-xl sm:text-2xl text-center">
          {data?.title || "Judul tidak tersedia"}
        </h1>
        <h2 className="opacity-70 text-xs sm:text-sm">
          {data?.created_by || "Penulis tidak dikenal"}
        </h2>
        <p className="text-center text-[14px] sm:text-lg md:text-xl px-3 font-light italic leading-relaxed sm:text-justify text-left">
          {data?.desc
            ? data.desc.split("\n\n").map((paragraph, index) => (
                <span key={index}>
                  {paragraph}
                  <br />
                  <br />
                </span>
              ))
            : "Deskripsi tidak tersedia"}
        </p>
      </div>
    </>
  );
};

export default NewsDescription;
