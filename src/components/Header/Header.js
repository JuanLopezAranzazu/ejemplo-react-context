import React from "react";
import "./Header.css";
import { Link } from "wouter";

function Header() {
  return (
    <div className="header">
      <div className="containerHeader">
        <Link className="btn btn-primary btn-round" to="/">
          Dishes
        </Link>
        <Link className="btn btn-primary btn-round" to="/categories">
          Categories
        </Link>
      </div>
    </div>
  );
}

export default Header;
