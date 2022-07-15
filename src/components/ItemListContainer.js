import React, {useState} from 'react'
import ItemList from './ItemList';
import {data} from '../utils/products'

const ItemListContainer = (props) => {

    const [productList, setProductList] = useState([])

    let is_ok = true;

    let fetchProducts = (time, task) => {
        return new Promise((resolve, reject) => {
            if(is_ok) {
                setTimeout(() => {
                    resolve(task)
                }, time);
            } else {
                reject("Error");
            }
        });
    }

    fetchProducts(2000, data)
        .then(datos => setProductList(datos))
        .catch(err => {console.log(err)})


    return(
        <>
            <h5>{props.greetings}</h5>
            
            <ItemList items={productList}/>
            
        </>
    );
}

export default ItemListContainer;