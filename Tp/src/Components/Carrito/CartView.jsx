import { useCart } from "../../context/cartContext"; 
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section>
      <h1>Carrito de Compras</h1>

      {cart.length ? <>
        <CartList />
        <CartSummary/>
      </>
       : <p>Tu carrito está vacío</p>}
    </section>
  );
};
