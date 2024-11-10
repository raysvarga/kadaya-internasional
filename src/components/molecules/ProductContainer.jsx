import React from "react";
import ProductCard from "../atoms/ProductCard";

const ProductContainer = ({ showCategory, productData }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-4 pb-20 max-w-80 mx-auto">
        {productData?.map((data, index) => (
          <ProductCard
            key={index}
            id={data.id}
            showCategory={showCategory}
            name={
              data.name.length > 14
                ? `${data.name.substring(0, 14)}...`
                : data.name
            }
            team={
              data.team.length > 18
                ? `${data.team.substring(0, 18)}...`
                : data.team
            }
            unit={
              data.unit.length > 19
                ? `${data.unit.substring(0, 19)}...`
                : data.unit
            }
            cert={data.cert}
            category={data.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
