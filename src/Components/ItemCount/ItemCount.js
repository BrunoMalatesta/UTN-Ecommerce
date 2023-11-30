import React, {useState} from 'react'
import "./ItemCount.css"

export const ItemCount = ({ stock, initial, onAdd }) => {

  const [count, setCount] = useState(initial);


  const handlerClickRestar = () => {
    if( count > 1) {
      setCount(count - 1)
    }
  };

  const handlerClickSumar= () => {
    if( count < stock){
      setCount(count + 1)
    }
  };

  return (
    <div className='itemcount'>
      <h3 className='contador'>{count}</h3>
      <button onClick={handlerClickRestar}>-</button>
      <button onClick={handlerClickSumar}>+</button>
      <button disabled={stock === 0 } onClick={()=>onAdd(count)}>
        <span>{stock === 0 ? "No tenemos stock" : "Agrega al carrito"}</span>    
        </button>
    </div>
  );


};


