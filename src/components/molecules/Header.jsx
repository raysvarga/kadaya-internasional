import React from "react";
import SearchBar from "../atoms/SearchBar";
import logoTxt from "../../assets/img/logoTxt.png";
import { Link, useMatch } from "react-router-dom";

const Header = () => {
  const isFind = useMatch("/find/*");
  const isHome = useMatch("/");

  return (
    <div className="flex justify-between items-center mx-5 mt-5">
      <Link to={"/"}>
        <img src={logoTxt} alt="Arrum Samudra" />
      </Link>

      <div className={`${isFind || isHome ? null : "hidden"}`}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
