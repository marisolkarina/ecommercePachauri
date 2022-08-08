// import { db } from '../utils/firebaseConfig'
// import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from 'react'
import {useState} from 'react'
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router";
import { firestoreFetchOne } from '../utils/firestoreFetch';


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {id} = useParams();

    useEffect(() => {

        // const firestoreFetch = async () => {
        //     const querySnapshot = await getDocs(collection(db, "products"));
        //     const dataFromFirestores = querySnapshot.docs.map((doc) => ({
        //         id: doc.id,
        //         ...doc.data()
        //     }))
        //     return dataFromFirestores
        // }
        // if(id === undefined) {
        //     firestoreFetch()
        //         .then(result => setDato(result))
        //         .catch(err => setDato(err))
        // }else {
        //     firestoreFetch()
        //         .then(result => setDato(result.find(item => item.id === id)))
        //         .catch(err => setDato(err))
        // }

        firestoreFetchOne (id)
            .then(result => setDato(result))
            .catch(err => setDato(err))

//?//
    }, [id]);

    return (
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer