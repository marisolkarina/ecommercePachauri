import React, { useEffect } from 'react'
import {useState} from 'react'
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router";
import { firestoreFetchOne } from '../utils/firestoreFetch';


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {id} = useParams();

    useEffect(() => {

        firestoreFetchOne (id)
            .then(result => setDato(result))
            .catch(err => setDato(err))
    }, [id]);

    return (
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer