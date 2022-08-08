import { db } from '../utils/firebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import { useParams } from "react-router";


const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const firestoreFetch = async () => {


            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFromFirestores = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            return dataFromFirestores
        }

        if (id === undefined) {
            firestoreFetch()
                .then(result => setProductList(result))
                .catch(err => console.log(err))
        } else {
            firestoreFetch()
                .then(result => setProductList(result.filter(item => item.categoryId === id)))
                .catch(err => console.log(err))
        }
        
        
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