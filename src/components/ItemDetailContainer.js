import { db } from '../utils/firebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from 'react'
import {useState} from 'react'
// import customFetch from "../utils/customFetch"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router";
// const {data} = require('../utils/products')


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {id} = useParams();

    useEffect(() => {

        // customFetch(2000, data[parseInt(id)-1])
        //     .then(result => setDato(result))
        //     .catch(err => console.log(err))
        const firestoreFetch = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFromFirestores = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            return dataFromFirestores
        }
        if(id === undefined) {
            firestoreFetch()
            .then(result => setDato(result))
            .catch(err => setDato(err))
        }else {
            firestoreFetch()
            .then(result => setDato(result.find(item => item.id === id)))
            .catch(err => setDato(err))
        }
    }, [id]);

    return (
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer