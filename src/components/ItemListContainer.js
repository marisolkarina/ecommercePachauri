import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import { useParams } from "react-router";
import ItemCount from './ItemCount';
const {data} = require('../utils/products')

const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if(id === undefined) {
            customFetch(2000, data)
                .then(result => setProductList(result))
                .catch(err => console.log(err))  
        }else {
            customFetch(2000, data.filter(item => item.categoryId === id))
                .then(result => setProductList(result))
                .catch(err => console.log(err))
        }
        
    }, [id]);


    return(
        <>
           
            <ItemList items={productList}/>
            
        </>
    );
}

export default ItemListContainer;