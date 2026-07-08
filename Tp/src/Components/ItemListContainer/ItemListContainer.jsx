import { ItemList } from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../../services/productservice";
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
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
