import React from 'react'
import ItemCount from './ItemCount'
// import ItemDetailContainer from './ItemDetailContainer'

const ItemDetail = ({item}) => {
  return (
    <>
    {
        item.imagen
        ?
        <div>
            <h3>{item.nombre}</h3>
            <h3>{item.precio}</h3>
            <h3>{item.descripcion}</h3>
            <h3>{item.stock}</h3>
            <ItemCount stock="5" initial={1}/>
        </div>
        
        : <p>Cargando...</p>        
    }   
    </>
  )
}

export default ItemDetail