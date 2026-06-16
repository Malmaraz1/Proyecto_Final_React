export const RemoveToCart = ({ onRemove }) => {
  return (
    <button className="btn btn-danger" onClick={onRemove}>
        Eliminar del carrito
    </button>
  );
}
