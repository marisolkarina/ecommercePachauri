import React from 'react'
import ItemCount from './ItemCount'

const Item = ({product}) => {
  return (
    <div>
        <h2>{product.nombre}</h2>
        <img src={product.imagen} alt='imagen de producto'/>
        <p>{product.descripcion}</p> 
        <div>
            <ItemCount stock="5" initial="1"/>               
        </div>        
    </div>
  )
}

export default Item