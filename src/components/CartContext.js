import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addItem = (item, quantity) => {

        let isInCart = cartList.find(isInCart => isInCart.id === item.id)
        
        if (isInCart) {
            
            setCartList([...cartList])
        } else {
            setCartList([...cartList, item])
        }
        
    }

    const removeItem = (itemId) => {
        setCartList(cartList.filter(item => item.id !== itemId))
    }

    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;