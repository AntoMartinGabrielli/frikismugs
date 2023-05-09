import './ItemList.css';
import {Item} from '../Item/Item';
import {tazas} from '../../MockTazas';

const ItemList = ({listaTazas}) =>{
    return (
        <div>
            {listaTazas.map(tazas => 
                <Item key={tazas.id} img={tazas.img} stock={tazas.stock} description={tazas.descripcion} price={tazas.precio} title={tazas.titulo} />)}
        </div>
    )
}

export default ItemList;

/* export const ItemList = ({listaTazas}) =>{
    return(
        <div>
            {listaTazas.map((tazas) => {
                return (
                    <Item
                    key={tazas.id}
                    img={tazas.img}
                    stock={tazas.stock}
                    description={tazas.descripcion}
                    price={tazas.precio}
                    title={tazas.titulo}
                    />
                );
            })}
        </div>
    )
} */
