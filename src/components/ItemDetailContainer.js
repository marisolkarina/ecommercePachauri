import React, { useEffect } from 'react'
import {useState} from 'react'
import customFetch from "../utils/customFetch"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router";
const {data} = require('../utils/products')

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {id} = useParams();

    useEffect(() => {

        customFetch(2000, data[parseInt(id)-1])
            .then(result => setDato(result))
            .catch(err => console.log(err))

    }, [id]);

    return (
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer