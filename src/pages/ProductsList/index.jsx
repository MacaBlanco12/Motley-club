import ProductItem, { ProductItemSkeleton } from "../../components/ProductItem";
import { useGetAllProducts } from "../../hooks/useGetAllProducts";
import styles from "./ProductsList.module.css";

const ProductsList = () => {
  const { products, isLoading } = useGetAllProducts()

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

export default ProductsList;
