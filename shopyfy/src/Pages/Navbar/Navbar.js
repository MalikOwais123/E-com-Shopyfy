import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <div>
            <Link to="/">
              <h1>Logo</h1>
            </Link>
          </div>
        </div>
        <div className="navbar-item-container">
          <div className="navbar-item">
            <Link to="catogeries">
              <h3>Catogeries</h3>
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="authentication">
              <h3>Auth</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
