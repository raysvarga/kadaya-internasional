import React from "react";

const ButtonOrange = ({ text, padding }) => {
  return (
    <>
      <button className={`bg-[#F37125] text-white ${padding} rounded-full`}>
        {text}
      </button>
    </>
  );
};

export default ButtonOrange;
