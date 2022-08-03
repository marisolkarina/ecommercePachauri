import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'

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
            <h2>{item.name}</h2>
            <img src={item.image} alt='imagen de producto'/>
            <h5>{item.quantity} items</h5>
            <h3>Precio: S/. {item.price} cada uno</h3>
            <button className='btn btn-danger' onClick={() => test.removeItem(item.id)}>Eliminar</button>
            <hr />
          </div>

        ))
      }
      {
        test.cartList.length>0
        ?<button className='btn btn-warning' onClick={test.clear}>Vaciar carrito</button>
        :<div>
          <h5>Ups... no has añadido ningún producto al carrito.</h5>
          <Link to="/"><button className='btn btn-success'>Seguir comprando</button></Link>
        </div>
      }
     
            
      </div>
    </>
    
  )
}

export default Cart