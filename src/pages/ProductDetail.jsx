import React from "react";
import Header from "../components/molecules/Header";
import ProductDescription from "../components/atoms/ProductDescription";

const ProductDetail = () => {
  return (
    <div>
      <Header />
      <div className="w-full mt-5 grid place-content-center">
        <img src="https://placehold.co/150x200" alt="" />
      </div>
      <ProductDescription />
    </div>
  );
};

export default ProductDetail;
