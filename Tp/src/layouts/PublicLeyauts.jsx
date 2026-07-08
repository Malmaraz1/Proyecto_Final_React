import {Outlet} from "react-router-dom"
import {Header } from "../Components/Header/Header"
import {Footer} from "../Components/Footer/Footer"
import "../App.css";
export const PublicLayout = () => {

    return <>
     <div className="app-container">
    <Header/>
        <main className="main-content">
      <Outlet/>
        </main>
      <Footer/>
          </div>
     </>
    
    
}