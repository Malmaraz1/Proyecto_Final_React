import Contador from "../Contador/contador";
import { Item } from "../Item/Item";
import "./ItemDetail.css";
export const ItemDetail = ({ item }) => {

 
  
  return (
    <>
      <section className="item_detail_container">
        <aside className="item_detail_aside">
           <div className="img-container">
          < img className="img-detail" alt={item.title} src={item.image} />
           </div>
           <p>{item.description}</p>
        </aside>
        <aside className="item_detail_aside_contador">
           <div className="item_info_container">
            <p className="item-tittle-detail">{item.title}</p>
            <p>${item.price}</p>
            
          </div>
          <div className="item_detail_contador">
            < Contador></Contador>
            <button className="btn_primary">Agregar al carrito</button>
          </div>
         
        </aside>
      </section>
    </>
  );
};
