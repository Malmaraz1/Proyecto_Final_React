import { useCart } from "../../context/cartContext"; 
import { CartItem } from "./CartItem";
import "./CartList.css";
export const CartList = () => {
  const { cart } = useCart();

  return (
    <>
      <div className="cart-list-container">
        {cart.map((item) => (
          <CartItem key={item.id} item={item}/>
        ))}
      </div>
    </>
  );
};
