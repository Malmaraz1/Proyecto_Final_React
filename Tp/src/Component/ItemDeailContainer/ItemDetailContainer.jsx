import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())

      .then((data) => {
        const item = data.find((element) => String(element.id) === id);
        if (item) {
          setProductDetail(item);
          return;
        }
        console.log(data.element.id);
        throw new Error("Elemento no encontrado");
      })
      .catch((err) => console.log(err))

      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!productDetail) return <p>Producto no encontrado</p>;

  return (
    <section>
      
      <div className="products-container">
     
        <ItemDetail item={productDetail} />
      </div>
    </section>
  );
};
