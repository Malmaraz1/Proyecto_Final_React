import { useCart } from "../../context/cartContext";
import { useState } from "react";
import "./cartItem.css";
import Contador from "../Contador/contador";

export const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const handleSetCount = (newCount) => {
    if (newCount >= 1) {
      updateQuantity(item.id, newCount);
    }
  };
  const handleRemove = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      removeFromCart(item.id);
    }
  };

  const count = item.quantity || 1;
  const subtotal = (item.price * count).toFixed(2);

  return (
    <div className="cart-item-row">
      <div className="cart-item-image-container">
        <img className="cart-item-img" src={item.image} alt={item.title} />
      </div>

      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p className="cart-item-price">
         <strong>${subtotal}</strong>
        </p>

        <div className="cart-item-actions">
          <Contador count={count} setCount={handleSetCount} />
          <button className="btn-remove" onClick={handleRemove}>
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};
