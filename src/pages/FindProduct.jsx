import React, { useEffect, useState } from "react";
import CategorySelection from "../components/atoms/CategorySelection";
import ProductContainer from "../components/molecules/ProductContainer";
import Navbar from "../components/atoms/Navbar";
import Header from "../components/molecules/Header";
import { useMainContext } from "../context/MainContext";
import { useParams } from "react-router-dom";

const FindProduct = () => {
  const { setActiveCategory, searchQuery } = useMainContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Menampilkan 6 produk per halaman
  const { cat } = useParams();

  const fetchProducts = async () => {
    try {
      const response = await fetch("/data/products.json"); // Tunggu fetch selesai
      const data = await response.json(); // Tunggu parsing JSON selesai
      const productFromLS = JSON.stringify(data); // Tunggu stringified selesai

      if (productFromLS) {
        let categoryEdited = "";

        switch (cat) {
          case "ikan-segar":
            categoryEdited = "Ikan Segar";
            setActiveCategory("Ikan Segar");
            break;
          case "produk-olahan":
            categoryEdited = "Produk Olahan";
            setActiveCategory("Produk Olahan");
            break;
          case "rumput-laut":
            categoryEdited = "Rumput Laut";
            setActiveCategory("Rumput Laut");
            break;
          case "kopi":
            categoryEdited = "Kopi";
            setActiveCategory("Kopi");
            break;
          case "craft":
            categoryEdited = "Craft";
            setActiveCategory("Craft");
            break;
          case "desa-wisata":
            categoryEdited = "Desa Wisata";
            setActiveCategory("Desa Wisata");
            break;
          case "agrikultur":
            categoryEdited = "Agrikultur";
            setActiveCategory("Agrikultur");
            break;
          default:
            break;
        }

        const parsed = JSON.parse(productFromLS);
        const filteredCategory = parsed.filter(
          (product) => product.category === categoryEdited
        );
        const matchesSearch = filteredCategory?.filter((product) => {
          const matched = product.name
            .toLowerCase()
            .includes(searchQuery?.toLowerCase());

          if (searchQuery) {
            return matched;
          } else {
            return product;
          }
        });

        setFilteredProducts(matchesSearch);
      }
    } catch (error) {
      console.error("Error fetching statistics data:", error);
    }

    // fetch("/data/products.json")
    //   .then((response) => response.json())
    //   .then((data) => JSON.stringify(data))
    //   .then((stringifiedData) => setProductFromLS(stringifiedData))
    //   .catch((error) =>
    //     console.error("Error fetching statistics data:", error)
    //   );
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchProducts();
  }, [cat, searchQuery]);

  // Menghitung produk yang ditampilkan pada halaman saat ini
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(filteredProducts?.length / productsPerPage);

  // Fungsi untuk pindah ke halaman berikutnya
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Fungsi untuk pindah ke halaman sebelumnya
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="mx-5">
        <div className="-mx-5">
          <Header />
        </div>
        <div className="mt-5">
          <CategorySelection selected />
        </div>
        <div className="mt-5">
          <ProductContainer productData={currentProducts} />
        </div>
        {totalPages > 1 && ( // Hanya tampilkan pagination jika ada lebih dari satu halaman
          <div className="flex justify-center mt-4 pb-24">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-l-lg"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span className="px-4 py-2">
              {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
        <Navbar />
      </div>
    </div>
  );
};

export default FindProduct;
