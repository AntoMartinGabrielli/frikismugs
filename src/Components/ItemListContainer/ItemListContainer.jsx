import { useState, useEffect } from "react";
import { getTazas } from "../../MockTazas";
import ItemList from "../ItemList/ItemList";


const ItemListContainer =({greeting})=>{
    
    const [tazas, setTazas] = useState([]);

    useEffect (()=>{
        getTazas()
        .then(resolve => {
            setTazas(resolve)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList listaTazas={tazas}></ItemList>
        </div>
    );
};

export default ItemListContainer;
