import React from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';


const Item = ({product}) => {
  return (
    <div>
        <h2>{product.nombre}</h2>
        <img src={product.imagen} alt='imagen de producto'/>
        <p>{product.descripcion}</p> 
        <div>
          <Link to={`/item/${product.id}`}>Detalle</Link>
          <br />
          <ItemCount stock="5" initial="1"/>               
        </div>        
    </div>
  )
}

export default Item