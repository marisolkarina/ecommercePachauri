import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const[cantidad, setCantidad] = useState(initial);
    
    const aumentar = () => {
        if(cantidad<stock) {
            setCantidad(parseInt(cantidad)+1);
        } 
    }

    const disminuir = () => {
        if(cantidad>1) {
            setCantidad(cantidad-1);
        }
    }
    


    return (
        <>
            <button className="btn btn-danger" onClick={disminuir}>-</button>
            <span className='fs-4 mx-3'>{cantidad}</span>
            <button className="btn btn-success" onClick={aumentar}>+</button>
            <div>
                {
                    <button onClick={()=>onAdd(cantidad)} className="btn btn-primary btn-lg mt-3">Agregar al carrito</button>   
                }
                
            </div>
               
        </>
    )
}
export default ItemCount
