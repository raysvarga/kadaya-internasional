import React, { useEffect, useState } from "react";
import Header from "../components/molecules/Header";
import BannerGradient from "../components/atoms/BannerGradient";
import GetingCloserToArrum from "../components/atoms/GetingCloserToArrum";
import CategorySelection from "../components/atoms/CategorySelection";
import ProductTypeSelection from "../components/atoms/ProductTypeSelection";
import ProductContainer from "../components/molecules/ProductContainer";
import Navbar from "../components/atoms/Navbar";
import { useMainContext } from "../context/MainContext";

const Home = () => {
  const {
    setDataToState,
    setFilteredProducts,
    filteredProducts = [],
    products = [],
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    setOtherSelected,
  } = useMainContext();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Jumlah produk per halaman
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveCategory("");
    setSearchQuery(null);
    setOtherSelected(false);
  }, []);

  useEffect(() => {
    fetch(`/data/products.json`)
      .then((response) => response.json())
      .then((data) => {
        setDataToState(data);
        const typeFiltered = data.filter((prod) =>
          prod.type.toLowerCase().includes("rekomendasi")
        );
        setFilteredProducts(typeFiltered);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  // Logic untuk pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts =
    filteredProducts.slice(indexOfFirstItem, indexOfLastItem) || [];

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter berdasarkan pencarian
  const filteredProductsSearch =
    products?.filter((product) =>
      product.name.toLowerCase().includes(searchQuery?.toLowerCase())
    ) || [];

  // Menghitung jumlah halaman berdasarkan jumlah total produk
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

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
    <>
      <Navbar />
      <Header />
      <div className="pb-20">
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className={`${searchQuery ? "hidden" : null} overflow-x-hidden`}>
            <div className="mx-5">
              <BannerGradient />
              <GetingCloserToArrum />
              <CategorySelection category />
              <ProductTypeSelection />
              <div className="mt-5">
                {loading ? (
                  <p className="text-center text-gray-500">
                    Loading products...
                  </p>
                ) : (
                  <>
                    <ProductContainer
                      showCategory
                      productData={currentProducts}
                    />
                    {filteredProducts.length > 6 && ( // Hanya tampilkan pagination jika ada lebih dari 6 item
                      <div className="flex justify-center mt-4">
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {searchQuery && (
        <div className="mt-8">
          <ProductContainer
            showCategory
            productData={
              filteredProductsSearch.slice(indexOfFirstItem, indexOfLastItem) ||
              []
            }
          />
          {filteredProductsSearch.length > 6 && ( // Hanya tampilkan pagination jika ada lebih dari 6 item
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-l-lg"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <span className="px-4 py-2">
                {currentPage} of{" "}
                {Math.ceil(filteredProductsSearch.length / itemsPerPage)}
              </span>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
                onClick={nextPage}
                disabled={
                  currentPage ===
                  Math.ceil(filteredProductsSearch.length / itemsPerPage)
                }
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
