import './ItemDetailContainer.css';
import {useState, useEffect} from 'react';
/* import { getTazaById } from '../../MockTazas'; */
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import {getDoc, doc} from 'firebase/firestore';
import {db} from '../../Firebase/firebaseConfig';


const ItemDetailContainer = () => {
    const [taza, setTaza] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect (() => {
        setLoading(true)

        const docRef = doc(db, 'tazas', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const tazasAdapted = {id:response.id, ...data}
                setTaza(tazasAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        

    },[itemId])

    return (
        <div className="itemDetail">
            <ItemDetail {...taza}/>
        </div>
    )
}


/* const ItemDetailContainer = () =>{
    const [taza, setTaza] = useState(null);

    const {itemId} = useParams()

    useEffect( () => {
        getTazaById(itemId)
            .then(resolve => {
                setTaza(resolve)
            })
            .catch(error => {
                console.error(error)
            })
    },[itemId])

    return (
        <div className="itemDetail">
            <ItemDetail {...taza}/>
        </div>
    )
} */

export default ItemDetailContainer;
