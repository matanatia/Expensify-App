import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//developed
import "./Header.css";

const Header = ({ title }) => {
  const [error, setError] = useState(false);

  useEffect(() => {});

  return (
    <header className="Header">
      <h1>{title}</h1>
      <div className="links">
        <Link to="/" className="link">Dashboard</Link>
        <Link to="/create" className="link">Create Expense</Link>
        <Link to="/edit" className="link">Edit Expense</Link>
        <Link to="/help" className="link">Help</Link>
      </div>
    </header>
  );
};

Header.defaultProps = {};

export default Header;
