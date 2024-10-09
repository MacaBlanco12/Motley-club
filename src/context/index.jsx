import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const initialCart = {
  items: [],
  total: 0,
  qty: 0,
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : initialCart;
  });

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    const newCart = {
      ...cart,
      items: [...cart.items, item],
      total: cart.total + item.precio * item.qty,
      qty: cart.qty + item.qty,
    }

    setCart(newCart)
  }

  const updateItem = (itemId, qty) => {
    const item = cart.items.find(item => item.id === itemId)
    const newCart = {
      ...cart,
      items: cart.items.map(item => item.id === itemId ? { ...item, qty } : item),
      total: cart.total + item.precio * (qty - item.qty),
      qty: cart.qty + (qty - item.qty),
    }

    setCart(newCart)
  }

  const removeItem = (itemId) => {
    const item = cart.items.find(item => item.id === itemId)
    const newCart = {
      ...cart,
      items: cart.items.filter(item => item.id !== itemId),
      total: cart.total - item.precio * item.qty,
      qty: cart.qty - item.qty,
    }

    setCart(newCart)
  }

  const emptyCart = () => {
    setCart(initialCart)
  }

  return (
    <Context.Provider value={{ cart, addItem, updateItem, removeItem, emptyCart }}>
      {children}
    </Context.Provider>
  )
}

// add prop validation
CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}
