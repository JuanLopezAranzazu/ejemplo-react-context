import React, { useContext, useState } from "react";
import "./Dishes.css";
import DishesContext from "../../context/DishesContext";

function Dishes() {
  const [showModal, setShowModal] = useState(false);
  const dishesContext = useContext(DishesContext);
  console.log(dishesContext);

  const dishes = dishesContext.dishes;
  const [dishesId, setDishesId] = useState(dishes[0].id);
  function handleSubmitEntry(event) {
    event.preventDefault();
    dishesContext.deleteDishes(dishesId);
    setShowModal(false);
  }

  function DishesComponent({ id, name, price }) {
    const [showButtons, setShowButtons] = useState(false);
    return (
      <div
        className="dishes"
        key={id}
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <div className="containerText">
          <p>Name: {name}</p>
          <p>Price: {price.toLocaleString()}</p>
        </div>
        {showButtons && (
          <div className="containerButtons">
            <button
              className="btn btn-primary"
              onClick={() => {
                setDishesId(id);
                setShowModal(true);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }

  function ModalComponent({ handleSubmit }) {
    return (
      <div className="modal">
        <form className="modalForm" onSubmit={(event) => handleSubmit(event)}>
          <p>Are you sure you want to remove this item?</p>
          <button
            className="btn btn-primary btn-round"
            onClick={(event) => {
              event.preventDefault();
              setShowModal(false);
            }}
          >
            Cancel
          </button>
          <input
            className="btn btn-primary btn-round"
            type="submit"
            value="Delete"
          />
        </form>
      </div>
    );
  }

  return (
    <div className="mainDishes">
      <div className="headerDishes">
        <button className="btn btn-primary">Create</button>
      </div>
      <div className="containerDishes">
        {dishes.map((item, index) => (
          <DishesComponent key={index} {...item} />
        ))}
      </div>
      {showModal && <ModalComponent handleSubmit={handleSubmitEntry} />}
    </div>
  );
}

export default Dishes;
