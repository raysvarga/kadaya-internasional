import React from "react";

const StatisticDots = ({ data }) => {
  const colors = ["#f2981b", "#f05556", "#30addb", "#2e8799", "#2c3c46"];

  return (
    <div>
      <div className="bg-[#276b1e] rounded-full mt-1 py-1 ps-1">
        <div className="flex gap-2 justify-center">
          {data.slice(1).map((item, index) => (
            <div key={index} className="flex gap-1 items-center">
              <div
                className="w-5 h-5 rounded-full ring-1 ring-white"
                style={{ backgroundColor: colors[index] || "#ccc" }}
              ></div>
              <p className="text-white text-xs">{item[1]}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticDots;
