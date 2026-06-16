import Contador from "../Contador/contador";
import { useCart } from "../../context/cartContext";
import { useState } from "react";
import "./ItemDetail.css";
import { RemoveToCart } from "../buttons/removeToCart";
import { AddToCart } from "../buttons/addToCart";
export const ItemDetail = ({ item, view }) => {
  const [count, setCount] = useState(1);
  const { addToCart, removeFromCart } = useCart();

  const handleAdd = () => {
    if (count > 0) {
      addToCart(item, count);
      alert(`Agregaste ${count} unidades de ${item.title} al carrito`);
    } else {
      alert("Por favor, selecciona al menos 1 unidad.");
    }
  };

  const handleRemove = () => {
   
    if (
      window.confirm(
        "¿Estás seguro de que deseas eliminar este producto del carrito?",)
    )  {
      removeFromCart(item.id);
    }
  };
  return (
    <>
      <section className="item_detail_container">
        <aside className="item_detail_aside">
          <div className="img-container">
            <img className="img-detail" alt={item.title} src={item.image} />
          </div>
          <p>{item.description}</p>
        </aside>
        <aside className="item_detail_aside_contador">
          <div className="item_info_container">
            <p className="item-tittle-detail">{item.title}</p>
            <p className="item-precio-detail">${item.price}</p>
            <div className="item_detail_contador">
     
              {view === "cart" ? (
                <>
                <Contador count={count} setCount={setCount} />
                <RemoveToCart onRemove={handleRemove} />
                </>
              ) : (
                <>
                  <Contador count={count} setCount={setCount} />
                  <AddToCart onAdd={handleAdd} />
                </>
              )}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};
