import React from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';
const {data} = require('../utils/products')

const Item = ({product}) => {
  return (
    <div>
        <h2>{product.nombre}</h2>
        <img src={product.imagen} alt='imagen de producto'/>
        <p>{product.descripcion}</p> 
        <div>
          <Link to={`/item/${data.id}`}>Detalle</Link>
          <br />
          <ItemCount stock="5" initial="1"/>               
        </div>        
    </div>
  )
}

export default Item