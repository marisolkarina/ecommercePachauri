import React from 'react'
import {Link} from 'react-router-dom';


const Item = ({product}) => {
  return (
    <div className='card'>
        <img src={product.imagen} alt='imagen de producto'/>
        <div className='card-body'>
          <h5 className='card-tittle'>{product.nombre}</h5>
          <Link className="mb-3 btn btn-primary" to={`/item/${product.id}`}>Detalle</Link>
        </div>
    </div>
  )
}

export default Item