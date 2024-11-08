import React from "react";
import Detail from "../../assets/img/detail_berita.jpg";

const NewsDescription = () => {
  return (
    <>
      <div className="w-full mt-5 grid place-content-center relative">
        <img className="w-80 rounded-xl" src={Detail} alt="" />
        <p className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-[#fafafa] px-5 py-2 rounded-xl font-medium text-base text-[#a60505]">
          Berita Terkini
        </p>
      </div>
      <div className="px-5 mt-2 flex flex-col items-center gap-2">
        <h1 className="font-semibold text-xl">DSA Arrum Berbagi Pinbox</h1>
        <h2 className="opacity-70 text-xs">BY ARRUM SAMUDRA</h2>
        <p className="text-center text-[14px] px-3 font-light italic">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto amet dolorum, porro ad blanditiis ea nemo. Laudantium consequuntur dolores vero.
        </p>
      </div>
    </>
  );
};

export default NewsDescription;
