import React from "react";

const StatisticDots = () => {
  return (
    <div>
      <div className="bg-[#231f20] rounded-full mt-1 py-1 ps-1">
        <div className="flex gap-2">
          <div className="flex gap-1 items-center">
            <div className="w-5 h-5 bg-[#2c3c46] rounded-full ring-1 ring-white"></div>
            <p className="text-white text-xs">20%</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-5 h-5 bg-[#f2981b] rounded-full ring-1 ring-white"></div>
            <p className="text-white text-xs">20%</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-5 h-5 bg-[#f05556] rounded-full ring-1 ring-white"></div>
            <p className="text-white text-xs">20%</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-5 h-5 bg-[#30addb] rounded-full ring-1 ring-white"></div>
            <p className="text-white text-xs">20%</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-5 h-5 bg-[#2e8799] rounded-full ring-1 ring-white"></div>
            <p className="text-white text-xs">20%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticDots;
