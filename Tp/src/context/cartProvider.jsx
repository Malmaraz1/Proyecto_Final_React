import { useNavigate } from "react-router-dom";
import { CartContext } from "./cartContext";
import { useState } from "react";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const isInCart = (item) => cart.some((element) => item.id === element.id);

  const addToCart = (item, quantity) => {
    if (isInCart(item)) {
      const updatedCart = cart.map((itemCard) =>
        itemCard.id === item.id
          ? { ...itemCard, quantity: itemCard.quantity + quantity }
          : itemCard,
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    }
  };
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product,
      ),
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((element) => element.id !== id));
  };

  const clearCart = () => setCart([]);
  const getCartQuantity = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);
  const getCartTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const checkout = () => {
    alert("Gracias por tu compra");
    clearCart();
    navigate("/");
  };

  const values = {
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartQuantity,
    getCartTotal,
    cart,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
