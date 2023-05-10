import { useState, useEffect} from "react";
import { getTazas,  getTazaByCategory } from "../../MockTazas";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer =({greeting})=>{
    
    const [tazas, setTazas] = useState([]);

    const {categoryId} = useParams()

    useEffect( () => {
        const asyncFunc = categoryId ? getTazaByCategory : getTazas

        asyncFunc(categoryId)
            .then(resolve => {
                setTazas(resolve)
            })
            .catch(error =>{
                console.error(error)
            })
    },[categoryId])
    
    
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList listaTazas={tazas}></ItemList>
        </div>
    );
};

export default ItemListContainer;
