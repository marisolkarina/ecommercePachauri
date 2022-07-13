import React from 'react'
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    return(
        <>
            <h5>{props.greetings}</h5>
            
            <ItemCount stock="5" initial="1"/>
        </>
    );
}

export default ItemListContainer;