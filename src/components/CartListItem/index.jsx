import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Context } from '../../context';
import styles from "./CartListItem.module.css";

const CartListItem = ({ product }) => {
  const [qty, setQty] = useState(product.qty);
  const { removeItem, updateItem } = useContext(Context);

  const handleMore = () => {
    if (product.qty < product.stock) {
      setQty(qty + 1);
      updateItem(product.id, product.qty + 1);
    }
  }

  const handleLess = () => {
    if (product.qty > 1) {
      setQty(qty - 1);
      updateItem(product.id, product.qty - 1);
    }
  }

  return (
    <li key={product.id} className={styles.item}>
      <div className={styles.col}>
        <img src={product.imagen} alt={product.nombre} className={styles.image} />
        <div className={styles.info}>
          <h2 className={styles.title}>{product.nombre}</h2>
          <p className={styles.price}>${product.precio} por unidad</p>
          <div className={styles.counter}>
            <button onClick={handleLess} className={styles.button} disabled={product.qty === 1}>-</button>
            <span>{qty}</span>
            <button onClick={handleMore} className={styles.button} disabled={product.qty === product.stock}>+</button>
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => removeItem(product.id)} className={styles.remove}>Eliminar</button>
      </div>
    </li>
  )
}

export default CartListItem;

CartListItem.propTypes = {
  product: PropTypes.object.isRequired
}
