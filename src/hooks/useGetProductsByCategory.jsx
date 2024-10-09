import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useGetProductsByCategory = ({ id }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getProductsByCategory = async () => {
    const q = query(collection(db, "productos"), where("categoria", "==", id) );
    const querySnapshot = await getDocs(q);

    const addedProducts = []

    querySnapshot.forEach((doc) => {
      addedProducts.push({...doc.data(), id: doc.id})
    })

    setProducts(addedProducts)
    setIsLoading(false)
  }

  useEffect(() => {
    getProductsByCategory()
  }, [id])

  return {
    isLoading,
    products
  }
}
