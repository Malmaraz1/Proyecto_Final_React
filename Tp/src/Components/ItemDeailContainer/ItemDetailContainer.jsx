import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { getProductoById } from "../../services/productservice";
export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
   
      getProductoById(id).then((data) => {
       setProductDetail(data);
      })
      
      .catch((err) => console.log(err))

      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!productDetail) return <p>Producto no encontrado</p>;

  return (
    <section className="detail-page-wrapper">
      
      <div className="products-container">
     
        <ItemDetail item={productDetail} />
      </div>
    </section>
  );
};
