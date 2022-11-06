import React from "react";
import "./App.css";
import { Route } from "wouter";
import Home from "./pages/Home/Home";
import UserPage from "./pages/UserPage/UserPage";
import { ToastContextProvider } from "./context/ToastContext";

const App = () => {
  return (
    <ToastContextProvider>
      <Route path="/" component={Home} />
      <Route path="/:id" component={UserPage} />
    </ToastContextProvider>
  );
};

export default App;

// import React from "react";
// import "./App.css";
// import { Route } from "wouter";
// import Dishes from "./pages/Dishes/Dishes";
// import Categories from "./pages/Categories/Categories";
// import Header from "./components/Header/Header";
// import { DishesContextProvider } from "./context/DishesContext";
// import { CategoriesContextProvider } from "./context/CategoriesContext";

// const App = () => {
//   return (
//     <CategoriesContextProvider>
//       <DishesContextProvider>
//         <Header />
//         <Route path="/" component={Dishes} />
//         <Route path="/categories" component={Categories} />
//       </DishesContextProvider>
//     </CategoriesContextProvider>
//   );
// };

// export default App;
