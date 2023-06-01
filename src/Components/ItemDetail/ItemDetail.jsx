import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Card from "react-bootstrap/Card";
import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';


const ItemDetail = ({id,img,stock,titulo,descripcion,precio,categoria}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState (0)

    const {addToCart} = useContext (CartContext)

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad)

        const item = {
            id, titulo, precio
        }
        addToCart(item, cantidad)
    }

    return (
        <div className="cardDetail">
            <Card  text="dark" style={{ width: '18rem' }} border="dark">
                <Card.Img src={img} ></Card.Img>
                <Card.Body className="itemInfo">
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>{descripcion}</Card.Text>
                    <Card.Text>Precio: {precio}</Card.Text>
                    <Card.Text>Stock disponible: {stock}</Card.Text>
                    <Card.Footer>
                        { cantidadAgregada > 0 ? (
                            <Link to='/cart'>Terminar compra</Link>
                        ) : (
                            <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>)
                        }
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail;

/* <ItemCount inicial={1} stock={10} onAdd={(cantidad)=> console.log('Cantidad agregada', cantidad)}></ItemCount> */