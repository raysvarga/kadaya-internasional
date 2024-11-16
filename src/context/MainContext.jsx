import { createContext, useState, useContext } from "react";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();
  const [activeCategory, setActiveCategory] = useState("");

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
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
