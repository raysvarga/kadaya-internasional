import React from "react";

const PartnerCard = ({ imageSrc, altText, bgColor, link }) => {
  return (
    <div
      className={`w-28 p-5 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:translate-y-1 flex items-center justify-center ${bgColor}`}
    >
      <a href={link}>
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-auto object-contain"
        />
      </a>
    </div>
  );
};

export default PartnerCard;
