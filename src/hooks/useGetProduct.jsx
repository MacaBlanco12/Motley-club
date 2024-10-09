import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useGetProduct = ({ id }) => {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [qty, setQty] = useState(1)

  const getProduct = async () => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProduct({ ...docSnap.data(), id: docSnap.id })
      setIsLoading(false)
    } else {
      setError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  const handleLess = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  const handleMore = () => {
    if (qty < product?.stock) {
      setQty(qty + 1)
    }
  }

  return {
    isLoading,
    product,
    error,
    qty,
    handleLess,
    handleMore
  }
}
