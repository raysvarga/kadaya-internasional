import React from "react";

const AboutCard = ({ title, desc, bgColor, fontColor, svg }) => {
  return (
    <div className={`p-3 ${bgColor}`}>
      <div className="flex items-center">
        <div className="mr-2">{svg}</div>
        <h2 className={`text-xl font-bold ${fontColor}`}>{title}</h2>
      </div>
      <p className={`text-base mt-2 ${fontColor}`}>{desc}</p>
    </div>
  );
};

export default AboutCard;
