import { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import {getDocs, collection, query, where} from 'firebase/firestore';
import {db} from '../../Firebase/firebaseConfig';


const ItemListContainer =({greeting})=>{
    
    const [tazas, setTazas] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()

    useEffect ( () => {
        setLoading(true)

        const collectionRef = categoryId ? query (collection(db,'tazas'), where ('categoria', '==', categoryId)) : collection (db,'tazas')

        getDocs(collectionRef)
            .then(response => {
                const tazasAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setTazas(tazasAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList listaTazas={tazas}></ItemList>
        </div>
    );
};

export default ItemListContainer;
