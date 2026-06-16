import { useCart } from "../../context/cartContext"; 

export const CartSummary = () => {
  const { getCartTotal, checkout } = useCart();

  return (
    <>
      <div>
        <h2>Resumen del Carrito</h2>
        <p>Total: ${getCartTotal()}</p>
        <button onClick={checkout}>complete purchase</button>
      </div>
    </>
  );
};
