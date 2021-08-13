import React, { Component } from "react";
import cartIcon from "./shopping-cart-solid.svg";
import { loadTotal } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./app-header.scss";

class AppHeader extends Component {
  componentDidMount() {
    this.props.loadTotal();
  }
  render() {
    const { total } = this.props;
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
  }
}
const mapStateToProps = ({ total }) => {
  return {
    total,
  };
};

const mapDispatchToProps = {
  loadTotal,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
