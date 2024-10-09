import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context";
import { useGetProduct } from "../../hooks/useGetProduct";
import styles from "./ProductView.module.css";

const ProductView = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const { addItem } = useContext(Context);
  const { product, isLoading, error, qty, handleLess, handleMore } = useGetProduct({ id });

  const handleAddItem = () => {
    addItem({ ...product, qty });
    navigate('/cart');
  }

  if (error) {
    navigate('/404');
  }

  if (isLoading) return <ProductViewSkeleton />

  return (
    <article className={`container ${styles.article}`}>
      <img src={product.imagen} alt={product.nombre} className={styles.image} />

      <div className={styles.info}>
        <h1 className={styles.title}>{product.nombre}</h1>
        <p className={styles.description}>{product.descripcion}</p>
        <p className={styles.price}>${product.precio}</p>
        <div className={styles.counter}>
          <button onClick={handleLess} className={styles.button} disabled={qty === 1}>-</button>
          <span>{qty}</span>
          <button onClick={handleMore} className={styles.button} disabled={qty === product.stock}>+</button>
        </div>

        <button className={styles.addCart} onClick={handleAddItem}>Agregar al carrito</button>
        {qty === product.stock && <span className={styles.disclaimer}>Alcanzaste el máximo de unidades disponibles</span>}
      </div>
    </article>
  )
}

export default ProductView;

const ProductViewSkeleton = () => {
  return (
    <article className={`container ${styles.skeletonArticle}`}>
      <div className={`${styles.skeleton} ${styles.skeletonImage}`}></div>

      <div className={styles.info}>
        <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTitle}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>

        <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonButton}`}></div>
      </div>
    </article>
  )
}
