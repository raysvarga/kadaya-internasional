import React, { useEffect, useState } from "react";
import Header from "../components/molecules/Header";
import ProductDescription from "../components/atoms/ProductDescription";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const productFromLS = sessionStorage.getItem("productData");

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
        {product?.img ? (
          <img
            src={`/assets/productImg/${product?.img}`}
            alt=""
            className="h-[200px] w-[150px]"
          />
        ) : (
          <img
            src={`/assets/productImg/no-pict.png`}
            alt=""
            className="h-[200px] w-[150px]"
          />
        )}
      </div>
      <ProductDescription data={product} />
    </div>
  );
};

export default ProductDetail;
