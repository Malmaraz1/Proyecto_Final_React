import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/carrito"}>Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};
