import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCount ({stock, initial}) {
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
    
    function onAdd() {
        console.log("Producto añadido al carrito");
    }

    return (
        <div>
            <h2>Paleta de Sombras Paradise Enchanted 0.25 fl oz</h2>
            <img src='https://falabella.scene7.com/is/image/FalabellaPE/16555259_1?wid=240&hei=240&qlt=70' alt='imagen de maquillaje'/>
            <div>
                <button className="btn btn-danger" onClick={disminuir}>-</button>
                <span className='fs-4 mx-3'>{cantidad}</span>
                <button className="btn btn-success" onClick={aumentar}>+</button>                 
            </div>
            <button onClick={onAdd} className="btn btn-primary btn-lg mt-3">Agregar al carrito</button>
            
        </div>
    )
}

export default ItemCount