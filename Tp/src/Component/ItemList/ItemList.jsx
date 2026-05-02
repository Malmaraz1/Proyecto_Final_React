import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
export const ItemList = ({products}) => {
  return (
    <>
      {products.map((prod) => (
         <Link to={`/product/${prod.id}`} key={prod.id}>
          <Item {...prod} />
        </Link>
      ))}
    </>
  );
};
