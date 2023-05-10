import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Card from "react-bootstrap/Card";


const ItemDetail = ({id,img,stock,titulo,descripcion,precio,categoria}) => {
    return (
        <Card>
          <Card.Img src={img} ></Card.Img>
            <Card.Body className="itemInfo">
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>Precio: {precio}</Card.Text>
                <Card.Text>Stock disponible: {stock}</Card.Text>
                <ItemCount inicial={1} stock={10} onAdd={(cantidad)=> console.log('Cantidad agregada', cantidad)}></ItemCount>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;