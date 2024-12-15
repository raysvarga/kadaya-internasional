import { createContext, useState, useContext } from "react";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();
  const [activeCategory, setActiveCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState();
  const [otherSelected, setOtherSelected] = useState(false);
  const [typeSelected, setTypeSelected] = useState("rekomendasi");

  const setDataToState = (incomingProducts) => {
    setProducts(incomingProducts);
  };

  const updateFilteredProducts = (category) => {
    let updatedProducts = products;

    if (category) {
      updatedProducts = updatedProducts?.filter(
        (product) => product.category === category
      );
    }

    setFilteredProducts(updatedProducts);
  };

  const updateTypeSelected = (type) => {
    setTypeSelected(type);

    const typeFiltered = products?.filter((prod) => {
      const matched = prod.type.toLowerCase().includes(type);
      return matched;
    });

    setFilteredProducts(typeFiltered);
  };

  const handleCategoryClick = (categorySelected) => {
    setActiveCategory(categorySelected);
    updateFilteredProducts(categorySelected);
  };

  return (
    <MainContext.Provider
      value={{
        products,
        filteredProducts,
        activeCategory,
        setDataToState,
        setFilteredProducts,
        setActiveCategory,
        handleCategoryClick,
        searchQuery,
        setSearchQuery,
        otherSelected,
        setOtherSelected,
        updateTypeSelected,
        typeSelected,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
