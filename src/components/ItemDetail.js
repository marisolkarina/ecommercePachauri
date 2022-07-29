import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext)

  const onAdd = (cantidad) => {
    alert('Añadiste '+cantidad+' unidades del producto al carrito')
    setItemCount(cantidad)
    test.addToCart(item)
  }

  return (
    <>
    {
      item.imagen
      ?
      <div className='productoDetalle'>
        <div>
          <img src={item.imagen} alt='imagen de producto'/>
        </div>
        <div>
          <h3>{item.nombre}</h3>
          <h3>Precio: {item.precio}</h3>
          <p>Descripción: {item.descripcion}</p>
          <h3>Stock: {item.stock}</h3>
          {
            itemCount === 0
            ?<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
            :<Link to='/cart'><button>Ir al carrito</button></Link>
          }         
        </div>
            
      </div>  
      : <p>Cargando...</p>        
    }   
    </>
  )
}

export default ItemDetail