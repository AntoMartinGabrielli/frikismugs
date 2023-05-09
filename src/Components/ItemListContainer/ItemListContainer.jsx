import { useState, useEffect } from "react";
import { getTazas } from "../../MockTazas";
import { ItemList } from "../ItemList/ItemList";


const ItemListContainer =({greeting})=>{
    
    const [tazas, setTazas] = useState([]);

   /*  const getListProduct = new Promise((resolve, rej)=>{
        setTimeout(()=>{
            resolve(mockTazas);
        },2000)
    }); */

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
            <ItemList tazas={tazas}></ItemList>
        </div>
    );
};

export default ItemListContainer;
