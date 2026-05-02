
import { Route } from 'react-router-dom'
import './App.css'
import { Footer } from './Component/Footer/Footer'
import { Header } from './Component/Header/Header'
import { ItemListContainer } from './Component/ItemListContainer/ItemListContainer'
import {Routes} from 'react-router-dom'
function App() {


  return (
    <>
    <Header></Header>
    <main>
      <Routes>
           <Route path="/" element={<ItemListContainer />} />
      </Routes>
   
    </main>
   
  <Footer></Footer>
     
    </>
  )
}

export default App
