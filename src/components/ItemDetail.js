import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
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
                <ItemCount stock={item.stock} initial={1}/> 
            </div>
        </div>
        
        : <p>Cargando...</p>        
    }   
    </>
  )
}

export default ItemDetail