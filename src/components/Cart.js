import { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {

  const test = useContext(CartContext)
  console.log(test.cartList)

  return (
    <>
      <h1>CARRITO DE COMPRAS</h1>
      <hr />
      <div>
      {
        test.cartList.length>0 && test.cartList.map(item => (
          <div>
            <h2>{item.nombre}</h2>
            <img src={item.imagen} alt='imagen de producto'/>
            <h5>2 items</h5>
            <h3>Precio: S/. {item.precio} cada uno</h3>
            <hr />
          </div>
          
        ))
      }
      </div>
    </>
    
  )
}

export default Cart