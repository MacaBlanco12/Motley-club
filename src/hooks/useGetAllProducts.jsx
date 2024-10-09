import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useGetAllProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getProducts = async () => {
    const query = collection(db, "productos");
    const querySnapshot = await getDocs(query);

    const addedProducts = []

    querySnapshot.forEach((doc) => {
      addedProducts.push({...doc.data(), id: doc.id})
    })

    setProducts(addedProducts)
    setIsLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return {
    isLoading,
    products
  }
}
