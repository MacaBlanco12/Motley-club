import { useContext } from "react";
import CartList from "../../components/CartList";
import { Context } from "../../context";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, emptyCart } = useContext(Context);

  return (
    <section className={`container ${styles.cartContainer}`}>
      <h1 className={styles.title}>Carrito</h1>
      {
        cart.items.length === 0 ? <p className={styles.emptyMessage}>No hay productos en el carrito</p> : <CartList products={cart.items} />
      }

      {
        cart.items.length > 0 &&
        <div className={styles.resume}>
          <p>Total: ${cart.total}</p>
          <div className={styles.buttons}>
            <button className={styles.checkoutButton}>Finalizar compra</button>
            <button onClick={emptyCart} className={styles.emptyCart}>Vaciar carrito</button>
          </div>
        </div>
      }
    </section>
  )
}

export default Cart;
