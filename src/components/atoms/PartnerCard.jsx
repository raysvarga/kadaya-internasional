import React from 'react';

const PartnerCard = ({ imageSrc, altText, bgColor }) => {
  return (
    <div className={`w-28 p-5 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:translate-y-1 flex items-center justify-center ${bgColor}`}>
      <img src={imageSrc} alt={altText} className="w-full h-auto object-contain" />
    </div>
  );
};

export default PartnerCard;
