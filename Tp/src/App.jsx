import { Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { Routes } from "react-router-dom";
import { CartView } from "./Components/Carrito/CartView";
import { ItemDetailContainer } from "./Components/ItemDeailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:category "
            element={<ItemListContainer></ItemListContainer>}
          />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Routes>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
