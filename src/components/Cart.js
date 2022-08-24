import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from 'firebase/firestore'
import { db } from "../utils/firebaseConfig"

const Cart = () => {

  const test = useContext(CartContext)

  let itemsForDB = test.cartList.map(item => ({
    id: item.id,
    title: item.name,
    price: item.price,
    qty: item.quantity
  }))
  const createOrder = () => {
    let order = {
      buyer: {
        email: "leo@messi.com",
        name: "Leo Messi",
        phone: "123456789"
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: test.totalPrice()
    }
    console.log(order)
  
    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order)
      return newOrderRef
    }

    createOrderInFirestore()
      .then(result => alert('La orden ha sido creada. ID = '+result.id))
      .catch(err => console.log(err))

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, 'products', item.id)
      await updateDoc(itemRef, {
        // stock: stock - item.quantity 
        // documentacion
        stock: increment(-item.quantity) 
      })
    })
    
    //borramos el carrito al aceptar
    test.clear()
  }
  return (
    <>
      <h1 className='m-2 text-center'>CARRITO DE COMPRAS</h1>
      <hr />
      <div className='m-2'>
        {
          test.cartList.length>0 && test.cartList.map(item => (
            <div className='carrito'>
              <h2 className='text-center'>{item.name}</h2>
              <img src={item.image} alt='imagen de producto'/>
              <h5>{item.quantity} items</h5>
              <h3>Precio: S/. {item.price} cada uno</h3>
              <button className='btn btn-danger' onClick={() => test.removeItem(item.id)}>Eliminar</button>
              <hr />
            </div>
          ))
        }
        <div className='border p-3 border-primary border-1 resumen w-50 m-auto'>
          <h3 className='p-1 bg-info bg-opacity-10'>Resumen de compra</h3>
          { test.cartList.length>0 && test.cartList.map(item => (
              <p>{item.name} | Subtotal: {item.quantity} x {item.price} = {item.quantity*item.price}</p>
            )) 
            
          }
          
          {
            test.cartList.length>0
            ?
            <>
              <h5>Monto a pagar: S/. {test.totalPrice()}</h5>
              <button onClick={createOrder} className="btn btn-primary">CHECKOUT NOW</button>
              <br />
              <br />
              <button className='btn btn-warning' onClick={test.clear}>Vaciar carrito</button>
            </>
            
            :<div>
              <h5>Ups... no has añadido ningún producto al carrito.</h5>
              <Link to="/"><button className='btn btn-success'>Seguir comprando</button></Link>
            </div>
          }
          
        </div>
            
      </div>
    </>
    
  )
}

export default Cart