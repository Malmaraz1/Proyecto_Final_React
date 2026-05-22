import { Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./Component/Footer/Footer";
import { Header } from "./Component/Header/Header";
import { ItemListContainer } from "./Component/ItemListContainer/ItemListContainer";
import { Routes } from "react-router-dom";

import { ItemDetailContainer } from "./Component/ItemDeailContainer/ItemDetailContainer";
import { CarritoContainer } from "./Component/Carrito/CarritoContainer";
function App() {
  return (
    
   <div className="app-container">
    
      <Header></Header>
      <main className="main-content" >
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CarritoContainer></CarritoContainer>} />
        </Routes>
      </main>

      <Footer></Footer>
     
    </div>
     
  );
}

export default App;
