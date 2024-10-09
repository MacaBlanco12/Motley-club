import PropTypes from 'prop-types';
import CartListItem from '../CartListItem';
import styles from "./CartList.module.css";

const CartList = ({ products }) => {
  return (
    <ul className={styles.listContainer}>
      {products.map((product) => (
        <CartListItem key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default CartList;

CartList.propTypes = {
  products: PropTypes.array.isRequired
}
