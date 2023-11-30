import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ productos }) => {
  return (
    <div className="containerCard">
      <div className="card-img">
        <img className="imagenprodcutos" src={productos.image} alt="" />
      </div>
      <div className="descripcioncard">
        <p>{productos.title}.</p>
        <p></p>
        <p>Precio: ${productos.price}</p>

        <Link to={"/producto/" + productos.id}>
          <button className="botondescripcion">detalles</button>
        </Link>
      </div>
    </div>
  );
};
