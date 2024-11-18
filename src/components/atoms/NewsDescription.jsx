import React from "react";

const NewsDescription = ({ data }) => {
  return (
    <>
      <div className="w-full mt-5 grid place-content-center relative">
        <p className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-[#fafafa] px-5 py-2 rounded-xl font-medium text-base text-[#a60505]">
          {data?.category}
        </p>
      </div>
      <div className="px-5 mt-2 flex flex-col items-center gap-2">
        <h1 className="font-semibold text-xl">{data?.title}</h1>
        <h2 className="opacity-70 text-xs">{data?.created_by}</h2>
        <p className="text-center text-[14px] px-3 font-light italic">
          {data?.desc}
        </p>
      </div>
    </>
  );
};

export default NewsDescription;
