import React, { useEffect, useState } from "react";
import CategorySelection from "../components/atoms/CategorySelection";
import ProductContainer from "../components/molecules/ProductContainer";
import Navbar from "../components/atoms/Navbar";
import { useMainContext } from "../context/MainContext";
import { useParams } from "react-router-dom";

const FindProduct = () => {
  const { setActiveCategory } = useMainContext();
  const [filteredProducts, setFilteredProducts] = useState();
  const { cat } = useParams();

  const productFromLS = localStorage.getItem("productData");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productFromLS) {
      let categoryEdited = "";

      switch (cat) {
        case "ikan-segar":
          categoryEdited = "Ikan Segar";
          setActiveCategory("Ikan Segar");
          break;
        case "olahan-ikan":
          categoryEdited = "Olahan Ikan";
          setActiveCategory("Olahan Ikan");
          break;
        case "rumput-laut":
          categoryEdited = "Rumput Laut";
          setActiveCategory("Rumput Laut");
          break;
        case "kopi":
          categoryEdited = "Kopi";
          setActiveCategory("Kopi");
          break;

        default:
          break;
      }

      const parsed = JSON.parse(productFromLS);
      const filtered = parsed.filter(
        (product) => product.category === categoryEdited
      );
      setFilteredProducts(filtered);
    }
  }, [cat]);

  return (
    <div className="mx-5">
      <div className="mt-5">
        <CategorySelection selected />
      </div>
      <div className="mt-5">
        <ProductContainer productData={filteredProducts} />
      </div>
      <Navbar />
    </div>
  );
};

export default FindProduct;
