import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({listaTazas}) =>{
    return (
        <div className='itemList'>
            {listaTazas.map(tazas => 
                <Item key={tazas.id} img={tazas.img} stock={tazas.stock} descripcion={tazas.descripcion} precio={tazas.precio} titulo={tazas.titulo} />)}
        </div>
    )
}

export default ItemList;

