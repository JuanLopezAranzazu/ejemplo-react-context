import React, { useState, useEffect } from "react";
import "./ListOfUsers.css";
import User from "../User/User";
import Spinner from "../Spinner/Spinner";
import { getUsers } from "../../services/getUsers";

const ListOfUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers().then((users) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="ListOfUsers">
          {users.map((user) => (
            <User
              key={user.id}
              fullname={user.fullname}
              username={user.username}
              role={user.role}
              id={user.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ListOfUsers;
