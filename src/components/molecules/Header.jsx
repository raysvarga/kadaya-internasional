import React from "react";
import SearchBar from "../atoms/SearchBar";
import logoTxt from "../../assets/img/logoTxt.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-5 mt-5">
      <Link to={"/"}>
        <img src={logoTxt} alt="Arrum Samudra" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Header;
