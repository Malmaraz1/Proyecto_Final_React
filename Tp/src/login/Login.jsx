import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

export const Login = () => {
    const {login} = useAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
  
      await login(formData.email, formData.password);
      console.log("Login exitoso");
      navigate("/admin", { replace: true });


    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }

  }
   return (
    <div className="login-container">
  <form onSubmit={handleSubmit} className="login-form">
    <h2>Iniciar sesión</h2>
    <p className="login-subtitle">Ingresá tus credenciales para acceder</p>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="ejemplo@correo.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="••••••••"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>

    <button type="submit" className="login-btn">
      Ingresar
    </button>
  </form>
</div>
  );

}