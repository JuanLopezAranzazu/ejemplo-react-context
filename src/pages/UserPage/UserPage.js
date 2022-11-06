import React, { useState, useEffect } from "react";
import "./UserPage.css";
import { getUserById } from "../../services/getUsers";
import Spinner from "../../components/Spinner/Spinner";

const UserPage = ({ params }) => {
  const { id: userId } = params;
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserById({ userId }).then((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="UserPage">
          <p>User data</p>
          <p>{user.fullname}</p>
          <p>{user.username}</p>
          <p>{user.role}</p>
          <p>{user.id}</p>
        </div>
      )}
    </>
  );
};

export default UserPage;
