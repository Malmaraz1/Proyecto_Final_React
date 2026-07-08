import { Route, Routes, Navigate } from "react-router-dom";

import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { CartView } from "./Components/Carrito/CartView";
import { ItemDetailContainer } from "./Components/ItemDeailContainer/ItemDetailContainer";
import { ProductFormContainer } from "./Components/adminComponents/ProductFormContainer";
import { ProductSuccess } from "./Components/adminComponents/ProductSuccess";
import { PublicLayout } from "./layouts/PublicLeyauts";
import { AdminLayout } from "./layouts/AdminLeyouts";
import { Login } from "./login/Login";
import { Dashboard } from "./Components/adminComponents/dashboard/dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Route>

        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path = "dashboard" element = {<Dashboard/>}/>
          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="product/success/:id" element={<ProductSuccess />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
