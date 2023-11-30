import { useContext } from "react";
import { Context } from "../../context/CartContext";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const { removeItem } = useContext(Context);

  return (
    <article className="cardcarro">
      <picture className="cardtamaño">
        <img className="imgcarro" src={product.image} alt={product.title} />
      </picture>
      <div className="cardinfo">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
      <div className="countcarro">
        <h4>Cantidad: {product.quantity}</h4>
      </div>
      <div className="counttotal">
        <h4>Total Producto: ${product.price * product.quantity}</h4>
        <span className="iconcarro">
          <RestoreFromTrashIcon
            className="icon"
            color="error"
            size="large"
            onClick={() => removeItem(product.id)}
          />
        </span>
      </div>
    </article>
  );
};

export default CartItem;
