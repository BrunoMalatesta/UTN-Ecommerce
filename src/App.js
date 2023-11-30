import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Containers/ItemListContainer/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Cart} from "./Containers/CartView/Cart";
import { CustomProvider } from "./context/CartContext";
import {Formulario} from "./Containers/Form/Formulario";
import Footer from "./Components/Footer/Footer.jsx";


const App = () => {
  
  const mensaje = "Todos Nuestros productos Artesanales."


  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
            <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje}/>} />
            <Route path="/producto/:id"element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<ItemListContainer/>}/>
            <Route path="/formulario" element={<Formulario/>} />
          </Routes>
          <Footer/>
        </CustomProvider>
      </BrowserRouter>
    </>
  );
};

export default App

