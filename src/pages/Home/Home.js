import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import { Link } from "wouter";
import Spinner from "./../../components/Spinner/Spinner";
import Toast from "./../../components/Toast/Toast";
import ToastContext from "../../context/ToastContext";

const apiURL = "http://localhost:3001/api/v1/users";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(null);

  const toastContext = useContext(ToastContext);

  useEffect(() => {
    console.log(toastContext);
    setLoading(true);
    fetch(apiURL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((users) => {
        console.log(users);
        setUsers(users);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        toastContext.updateToast("incorrect");
      });
  }, []);

  function ModalComponent({ userId }) {
    const salaries = users.find((item) => {
      return item.id === userId;
    }).salaries;
    return (
      <div className="modal">
        <div className="containerSalaries">
          <p>Salaries</p>
          {salaries.map((item) => {
            return (
              <div className="salary" key={item.id}>
                <p>Value: {item.value}</p>
              </div>
            );
          })}
          <div className="modalButtons">
            <button
              className="btn btn-primary btn-round"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <Link className="btn btn-primary btn-round" to={`/${userId}`}>
              Detail
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <>
          <Spinner />
          <Toast />
        </>
      ) : (
        <div className="mainHome">
          <Toast />
          <div className="containerUsers">
            {users.map((item) => {
              return (
                <div
                  className="user"
                  key={item.id}
                  onClick={() => {
                    setUserId(item.id);
                    setShowModal(true);
                  }}
                >
                  <p>Name: {item.fullname}</p>
                  <p>Username: {item.username}</p>
                </div>
              );
            })}
          </div>
          {showModal && <ModalComponent userId={userId} />}
        </div>
      )}
    </>
  );
};

export default Home;
