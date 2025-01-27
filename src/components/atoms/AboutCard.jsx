import React from "react";

const AboutCard = ({
  title,
  desc,
  bgColor = "bg-white",
  fontColor = "text-black",
  svg = null,
}) => {
  return (
    <div className={`py-5 px-3 ${bgColor}`}>
      <div className="flex items-center">
        <div className="mr-2">{svg}</div>
        <h2 className={`text-xl font-bold ${fontColor}`}>{title}</h2>
      </div>
      <div
        className={`text-base mt-2 text-justify break-words px-6 ${fontColor}`}
      >
        {desc}
      </div>
    </div>
  );
};

export default AboutCard;
