import React from "react";
import { useState } from "react";

const CategoriesContext = React.createContext({});

export function CategoriesContextProvider({ children }) {
  const [categories, setCategories] = useState([
    { id: 1, name: "category1" },
    { id: 2, name: "dategory2" },
  ]);

  function createCategories(dataForCategories) {
    categories.push({
      id:
        Math.max(
          ...categories.map((item) => {
            return item.id;
          })
        ) + 1,
      ...dataForCategories,
    });
    setCategories([...categories]);
  }

  function updateCategories(categoriesId, dataForCategories) {
    const indexCategories = categories.findIndex((item) => {
      return item.id === categoriesId;
    });
    if (indexCategories > -1) {
      categories[indexCategories] = {
        id: categories[indexCategories],
        ...dataForCategories,
      };
      setCategories([...categories]);
    }
  }

  function deleteCategories(categoriesId) {
    const categoriesFilter = categories.filter((item) => {
      return item.id !== categoriesId;
    });
    setCategories(categoriesFilter);
  }

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        createCategories,
        updateCategories,
        deleteCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesContext;
