import './ItemDetailContainer.css';
import {useState, useEffect} from 'react';
import { getTazaById } from '../../MockTazas';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{
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
}

export default ItemDetailContainer;
