import React from 'react'
import Item from './Item'
// import {data} from '../utils/products'

const ItemList = ({items}) => {
  return (
    <>
        {
            items.map(item => 
                <Item 
                    key={item.id}
                    product={item}
                />
            )
        }
    </>
   ) 
}

export default ItemList