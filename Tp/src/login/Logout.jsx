import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

export const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <button className="btn bg-delete primary" onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
};