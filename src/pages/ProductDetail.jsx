import React, { useEffect, useState } from "react";
import Header from "../components/molecules/Header";
import ProductDescription from "../components/atoms/ProductDescription";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch("/data/products.json"); // Tunggu fetch selesai
      const data = await response.json(); // Tunggu parsing JSON selesai

      if (data) {
        const selected = data.find((item) => item.id === parseInt(id));
        setProduct(selected);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchData();
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
