import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  return (
    <>
    {
        item.imagen
        ?
        <div>
            <h3>{item.nombre}</h3>
            <h3>Precio: {item.precio}</h3>
            <img src={item.imagen} alt='imagen de producto'/>
            <p>Descripción: {item.descripcion}</p>
            {/* <h3>{item.stock}</h3> */}
            <ItemCount stock="5" initial={1}/>
        </div>
        
        : <p>Cargando...</p>        
    }   
    </>
  )
}

export default ItemDetail