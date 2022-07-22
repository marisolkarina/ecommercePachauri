import React from 'react'
import {Link} from 'react-router-dom';


const Item = ({product}) => {
  return (
    <div>
        <h2>{product.nombre}</h2>
        <Link className="mb-3" to={`/item/${product.id}`}>Detalle</Link>
        <br />
        <img src={product.imagen} alt='imagen de producto'/>       
    </div>
  )
}

export default Item