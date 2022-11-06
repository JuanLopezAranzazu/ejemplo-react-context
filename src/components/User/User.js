import React from "react";
import "./User.css";
import { Link } from "wouter";

const User = ({ fullname, username, role, id }) => {
  return (
    <div className="User">
      <Link to={id}>Fullname: {fullname}</Link>
      <p>Username: {username}</p>
      <p>Role: {role}</p>
      <p>Id: {id}</p>
    </div>
  );
};

export default User;
