import { Link } from "react-router-dom";
import red_Envio from "../../assets/red_Envio.jpg";
import "./nav.css";

export const Nav = () => {
  return (
    <nav className="nav_container">
      <ul className="nav_list">
        <li>
          <Link to="/" className="cart_link-home">
          <img 
              src={red_Envio}
              alt="Logo Mi Tienda" 
              className="nav-logo-img" 
            />
          </Link>
        </li>
        
       
        <li className="nav_title">Mi tienda online</li>

        <li>
          <Link to="/carrito" className="cart_link">
            <span className="cart-icon">&#128722;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};