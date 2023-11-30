import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from "../../context/CartContext";
import "./CartWidget.css"


export const CartWidget = () => {
  const { quantity } = useContext(Context);

  return (
    <div className="logocarro">
      <ShoppingCartIcon  sx={{ fontSize: 30, color: '#bec1c4'}}/>
      {
        quantity > 0 && <div className="contadorcarro">{quantity}</div>
      }
    </div>
  )
}



