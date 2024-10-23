import React from "react";
import logo from "../../assets/img/logo.png";

const GetingCloserToArrum = () => {
  return (
    <div className="mt-5 flex items-center px-3">
      <div>
        <h3 className="text-2xl font-medium leading-7">
          Mengenal lebih <br /> dekat Arrum
        </h3>
        <p className="text-xs mt-1">
          Klik disini untuk mengenal lebih dekat tentang Arrum Samudra Nusantara
        </p>
      </div>
      <div className="grow-0 shrink-0">
        <img src={logo} alt="Arrum Samudra" className="w-[75px]" />
      </div>
    </div>
  );
};

export default GetingCloserToArrum;
