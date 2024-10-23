import React from "react";
import CategorySelection from "../components/atoms/CategorySelection";
import ProductContainer from "../components/molecules/ProductContainer";
import Navbar from "../components/atoms/Navbar";

const FindProduct = () => {
  return (
    <div className="mx-5">
      <div className="mt-5">
        <CategorySelection selected />
      </div>
      <div className="mt-5">
        <ProductContainer />
      </div>
      <Navbar />
    </div>
  );
};

export default FindProduct;
