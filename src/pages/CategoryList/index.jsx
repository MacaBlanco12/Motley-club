import { useParams } from "react-router-dom";
import ProductItem, { ProductItemSkeleton } from "../../components/ProductItem";
import { useGetProductsByCategory } from "../../hooks/useGetProductsByCategory";
import styles from "./CategoryList.module.css";

const CategoryList = () => {
  const id = useParams().id;
  const { products, isLoading } = useGetProductsByCategory({ id })

  return (
    <div className={`container ${styles.productsListContainer}`}>
      {
        isLoading ?
        [...Array(8)].map((_, i) => <ProductItemSkeleton key={i} />) :
        products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.nombre}
            description={product.descripcion}
            image={product.imagen}
            price={parseFloat(product.precio)} />)
        )
      }
    </div>
  )
}

export default CategoryList;
