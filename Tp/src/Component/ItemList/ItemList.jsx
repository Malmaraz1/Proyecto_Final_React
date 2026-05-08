import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./itemList.css";
export const ItemList = ({ products }) => {
  return (
    <>
      {products.map((prod) => (
        <Link className="items_list" to={`/product/${prod.id}`} key={prod.id}>
          <Item {...prod} />
        </Link>
      ))}
    </>
  );
};
