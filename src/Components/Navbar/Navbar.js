import React from "react";
import './Navbar.css'
import Logo from "../../assets/LOGODANI2.jpg";
import { CartWidget } from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom";

const Navbar =  () => {
    const categorias = [
        {nombre:"Alfombras", id:0, ruta:"/categoria/Alfombra"},
        {nombre:"Almohadas", id:1, ruta:"/categoria/Almohada"},
        {nombre:"Cuadros", id:2, ruta:"/categoria/Cuadro"},
        {nombre:"Lamparas", id:3, ruta:"/categoria/Lampara"},
      ];

    return (
        <header className="headermain"> 
          <Link to="/">
              <img className="imagenlogo" src={Logo} alt="logo daniela" />
          </Link>
        <nav className="categoriasnav">
        { 
          categorias.map((categoria)=>{
            return <NavLink key={categoria.id} to={categoria.ruta}><p className="botoncategoria">{categoria.nombre}</p></NavLink>
          })}
        </nav>
          <Link to="/cart">
            <CartWidget/>
          </Link>
        </header>
    )
}

export default Navbar;