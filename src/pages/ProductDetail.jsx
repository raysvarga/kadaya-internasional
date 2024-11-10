import React, { useEffect, useState } from "react";
import Header from "../components/molecules/Header";
import ProductDescription from "../components/atoms/ProductDescription";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const productFromLS = localStorage.getItem("productData");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productFromLS) {
      const parsed = JSON.parse(productFromLS);
      const selected = parsed.find((item) => item.id === parseInt(id));
      setProduct(selected);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="w-full mt-5 grid place-content-center">
        <img src="https://placehold.co/150x200" alt="" />
      </div>
      <ProductDescription data={product} />
    </div>
  );
};

export default ProductDetail;
