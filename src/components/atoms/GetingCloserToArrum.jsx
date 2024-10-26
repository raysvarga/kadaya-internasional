import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const GetingCloserToArrum = () => {
  return (
    <div className="mt-5 flex items-center px-3">
      <div>
        <h3 className="text-2xl font-medium leading-7">
          Mengenal lebih <br /> dekat Arrum
        </h3>
        <p className="text-xs mt-1">
          <Link to={"/about"} className="text-[#0795ff] font-medium underline">Klik disini</Link> untuk mengenal lebih dekat tentang Arrum Samudra Nusantara
        </p>
      </div>
      <Link to={"/about"} className="grow-0 shrink-0">
        <img src={logo} alt="Arrum Samudra" className="w-[75px]" />
      </Link>
    </div>
  );
};

export default GetingCloserToArrum;
