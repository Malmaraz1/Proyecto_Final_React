

import  "./addToCart.css";
export const AddToCart = ({ onAdd }) => {

  return (
    <button className="btn-danger" onClick={onAdd}>
        Agregar al carrito
    </button>
  );
}