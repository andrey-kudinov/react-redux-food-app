import React from "react";
import cartIcon from "./shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import "./app-header.scss";

const AppHeader = ({ total }) => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        Menu
      </Link>
      <Link to="/cart/" className="header__link" src={cartIcon} alt="cart">
        Total: {total} $
      </Link>
    </header>
  );
};

export default AppHeader;
