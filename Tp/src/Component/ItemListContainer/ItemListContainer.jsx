import { ItemList } from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import "./itemListContainer.css";
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())

      .then((data) => setProducts(data))

      .catch((err) => console.log(err))

      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <section className="item-list-container">
      <ItemList products={products} />
    </section>
  );
};
