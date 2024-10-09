import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";

const ProductItem = ({ id, name, description, image, price }) => {
  return (
    <article className={styles.article}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link to={`/item/${id}`} className={styles.cta}>Ver más</Link>
      </div>
    </article>
  )
}

export default ProductItem;

// esto sirve para validar el tipo de dato que se le pasa a un componente por props
// por ejemplo si en precio en vez de recibir un number recibo un string me va a tirar un warning
ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

// esto es un componente skeleton que se va a mostrar mientras se cargan los productos
export const ProductItemSkeleton = () => {
  return (
    <article className={styles.skeletonArticle}>
      <div className={`${styles.skeleton} ${styles.skeletonImage}`}></div>
      <div className={styles.info}>
        <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTitle}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonButton}`}></div>
      </div>
    </article>
  )
}
