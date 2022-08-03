import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addItem = (item, quantity) => {

    let isInCart = cartList.find(isInCart => isInCart.id === item.id)
        
        if (isInCart) {
            setCartList([...cartList])
            isInCart.quantity += quantity
        } else {
            setCartList([...cartList, {
                id: item.id,
                name: item.nombre,
                image: item.imagen,
                price: item.precio,
                quantity: quantity
            }])
        }
    }

    const removeItem = (itemId) => {
        setCartList(cartList.filter(item => item.id !== itemId))
    }

    const clear = () => {
        setCartList([])
    }

    const totalProducts = () => {
       
        let cantCarrito=0

        cartList.forEach(e => {
            cantCarrito += e.quantity
        });

        return cantCarrito
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, totalProducts}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;