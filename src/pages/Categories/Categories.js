import React, { useContext, useState } from "react";
import "./Categories.css";
import CategoriesContext from "./../../context/CategoriesContext";
import DishesContext from "./../../context/DishesContext";

function Categories() {
  const categoriesContext = useContext(CategoriesContext);
  const dishesContext = useContext(DishesContext);
  console.log(categoriesContext, dishesContext);

  const categories = categoriesContext.categories;
  const dishes = dishesContext.dishes;
  const [dishesByCategory, setDishesByCategory] = useState(
    dishes.filter((item) => {
      return item.categoryId === categories[0].id;
    })
  );

  function handleClickCategory(categoriesId) {
    const dishesFilter = dishes.filter((item) => {
      return item.categoryId === categoriesId;
    });
    console.log(dishesFilter);
    setDishesByCategory(dishesFilter);
  }

  return (
    <div className="mainCategories">
      <div className="containerCategories">
        {categories.map((item) => {
          return (
            <div
              className="categories"
              key={item.id}
              onClick={() => handleClickCategory(item.id)}
            >
              <p>Name: {item.name}</p>
            </div>
          );
        })}
      </div>
      <h1>Dishes by category</h1>
      <div className="containerCategories">
        {dishesByCategory.map((item) => {
          return (
            <div className="categories" key={item.id}>
              <p>Name: {item.name}</p>
              <p>Price: {item.price.toLocaleString()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
