import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import { useParams } from "react-router";
import { firestoreFetch } from '../utils/firestoreFetch';


const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        firestoreFetch (id)
            .then(result => setProductList(result))
            .catch(err => console.log(err))
        
    }, [id]);


    return(
        <>
        <div className='gridProductos'>
            <ItemList items={productList}/>
        </div>
            
            
        </>
    );
}

export default ItemListContainer;