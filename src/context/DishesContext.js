import React from "react";
import { useState } from "react";

const DishesContext = React.createContext({});

export function DishesContextProvider({ children }) {
  const [dishes, setDishes] = useState([
    { id: 1, name: "drinks", price: 52592, categoryId: 1 },
    { id: 2, name: "dishes", price: 262624, categoryId: 2 },
    { id: 3, name: "foods", price: 626246, categoryId: 2 },
  ]);

  function createDishes(dataForDishes) {
    dishes.push({
      id:
        Math.max(
          ...dishes.map((item) => {
            return item.id;
          })
        ) + 1,
      ...dataForDishes,
    });
    setDishes([...dishes]);
  }

  function updateDishes(dishesId, dataForDishes) {
    const indexDishes = dishes.findIndex((item) => {
      return item.id === dishesId;
    });
    if (indexDishes > -1) {
      dishes[indexDishes] = {
        id: dishes[indexDishes],
        ...dataForDishes,
      };
      setDishes([...dishes]);
    }
  }

  function deleteDishes(dishesId) {
    const dishesFilter = dishes.filter((item) => {
      return item.id !== dishesId;
    });
    setDishes(dishesFilter);
  }

  return (
    <DishesContext.Provider
      value={{ dishes, setDishes, createDishes, updateDishes, deleteDishes }}
    >
      {children}
    </DishesContext.Provider>
  );
}

export default DishesContext;
