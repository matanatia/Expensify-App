import React from "react";
import { NavLink } from "react-router-dom";
//developed
import "./Header.css";

const Header = ({ title }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <div className="links">
        <NavLink
          to="/"
          className="link"
          activeClassName="active-link"
          exact={true}
        >
          Dashboard
        </NavLink>
        <NavLink to="/create" className="link" activeClassName="active-link">
          Create Expense
        </NavLink>
        <NavLink to="/help" className="link" activeClassName="active-link">
          Help
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
