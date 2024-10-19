import React from "react";
import ProductCard from "../atoms/ProductCard";

const ProductContainer = () => {
  return (
    <div className="flex justify-center pb-16">
      <div className="grid grid-cols-2 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductContainer;
