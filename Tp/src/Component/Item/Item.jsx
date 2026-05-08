
import "./Item.css"
export const Item = ({ title, image, price  ,children}) => {
  return (
    <article className="item">
      <div className="item-image-container">
        <img alt={title} src={image} />
      </div>
     <div className="item-info">
        <h3 className="item-title">{title}</h3>
        <p className="item-price">${price}</p>
        {children}
      </div>
    </article>
  );
};