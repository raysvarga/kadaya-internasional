import React from "react";
import ProductCard from "../atoms/ProductCard";

const ProductContainer = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-4 pb-16 max-w-80 mx-auto">
        {/* <div className="grid grid-cols-2 gap-5"> */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductContainer;
