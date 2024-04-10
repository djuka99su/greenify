"use client";

import { createContext, useContext, useState } from "react";


interface ShoppingCartContext {
  getitemQuantity: (id: string) => number
  increaseCartQuantity: (id: string) => void
  decreaseCartQuantity: (id: string) => void
  removeFromCart: (id: string) => void
  cartQuantity: number,
  cartItems: CartItem[]
}

export interface CartItem  {
  id: string
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider( {children} : {children : React.ReactNode}){
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const getitemQuantity = (id:string) => {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  const increaseCartQuantity = (id:string) => {
    setCartItems(currItems => {
      if(currItems.find(item => item.id === id) == null){
        return [...currItems, {id, quantity: 1}]
      } else {
        return currItems.map(item => {
          if(item.id === id){
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    })
  }
  const decreaseCartQuantity = (id:string) => {
    setCartItems(currItems => {
      if(currItems.find(item => item.id === id)?.quantity === 1){
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if(item.id === id){
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  }
  const removeFromCart = (id: string) => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !==id)
    })
  }

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)


  return (
    <ShoppingCartContext.Provider value={{getitemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
