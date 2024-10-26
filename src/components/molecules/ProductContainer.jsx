import React from "react";
import ProductCard from "../atoms/ProductCard";

const ProductContainer = ({ showCategory }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-4 pb-20 max-w-80 mx-auto">
        {/* <div className="grid grid-cols-2 gap-5"> */}
        <ProductCard showCategory={showCategory} />
        <ProductCard showCategory={showCategory} />
        <ProductCard showCategory={showCategory} />
        <ProductCard showCategory={showCategory} />
        <ProductCard showCategory={showCategory} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductContainer;
