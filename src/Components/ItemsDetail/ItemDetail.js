import React, { useState, useContext } from "react";
import "../../Components/ItemsDetail/ItemDetail.css"
import {ItemCount} from '../../Components/ItemCount/ItemCount'
import {Link} from "react-router-dom";
import { Context } from "../../context/CartContext";
import Swal from 'sweetalert2';


export const ItemDetail = ({ producto }) => {
  const [isPressedButton, setIsPressedButton ] = useState(false);
  const { addItem } = useContext(Context);


  const onAdd = (count) => {
    setIsPressedButton(true);
    addItem(producto, count);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se agrego el producto al carrito',
      showConfirmButton: false,
      timer: 1500
    })

  };

  return (
    <div className="item">
      <img className="itemimg" alt={producto.title} src={producto.image} />
      <h1>{producto.title}</h1>
      <span>{producto.description}</span>
      <h2>{producto.price}$</h2>
      {! isPressedButton ? (
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        ) : (
          <Link to="/cart">
            <button>Ver en Carrito</button>
          </Link>
        )
      }
    </div>
  );
};




