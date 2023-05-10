import './ItemDetailContainer.css';
import {useState, useEffect} from 'react';
import { getTazaById } from '../../MockTazas';
import Item from '../Item/Item';

const ItemDetailContainer = () =>{
    const [taza, setTaza] = useState(null);

    useEffect(() => {
        getTazaById('1')
        .then(resolve =>{
            setTaza(resolve)
        })
        .catch(error => {
            console.error(error)
        })
    },[]);

    return (
        <div>
            <Item {...taza}/>
        </div>
    )
}

export default ItemDetailContainer;