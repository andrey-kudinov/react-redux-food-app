import React from "react";
import "./cart-table.scss";
import { connect } from "react-redux";
import { deleteFromCart, changeTotal } from "../../actions";

const CartTable = ({ items, deleteFromCart, changeTotal }) => {
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {items.map((item) => {
          const { title, price, url, id, count } = item;
          return (
            <div className="cart__item" key={id}>
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">{price}$</div>
              <div className="cart__item-price">
                {count > 1 ? `${count} items` : `${count} item`}
              </div>
              <div
                className="cart__close"
                onClick={() => {
                  deleteFromCart(id);
                  changeTotal(-price);
                }}
              >
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = ({ items }) => {
  return {
    items,
  };
};

const mapDispatchToProps = {
  deleteFromCart,
  changeTotal,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
