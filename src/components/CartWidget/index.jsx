import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  const { cart } = useContext(Context);

  return (
    // corregir esto, link no acepta clases
    <Link to="/cart" className={styles.cart}>
      <img src="/assets/carrito.png" alt="Cart" className={styles.icon} />
      {
        !!cart?.qty &&
        <div className={styles.qtyContainer}>
          <span className={styles.qty}>{cart?.qty}</span>
        </div>
      }
    </Link>
  )
}

export default CartWidget;
