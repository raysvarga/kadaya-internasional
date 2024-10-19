import React from "react";
import SearchBar from "../atoms/SearchBar";
import logoTxt from "../../assets/img/logoTxt.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="grow-0">
        <img src={logoTxt} alt="Arrum Samudra" />
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
