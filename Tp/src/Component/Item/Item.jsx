export const Item = ({ title, image, description, price , category }) => {
  return (
    <article className="item">
      <h3>{title}</h3>
      <img alt={title} src={image} />
      <p>{description}</p>
      <p>${price}</p>
      <p>{category}</p>
    </article>
  );
};