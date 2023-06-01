import {createContext, useState} from 'react';

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState ([])

    console.log(cart)

    const addToCart = (item, cantidad) => {
        if (!isInCart(item.id)){
            setCart(prev => [...prev,{...item,cantidad}])
        } else {
            console.error('Esta taza ya fue agregada al carrito')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(taza => taza.id !== itemId)
        setCart (cartUpdate)
    }

    const clearCart = () => {
        setCart ([])
    }

    const isInCart = (itemId) => {
        return cart.some(taza => taza.id === itemId)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}