import './Item.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({id, img, titulo, descripcion, precio}) => {
    return (
        <Card className="item">
            <Card.Img src={img} ></Card.Img>
            <Card.Body className="itemInfo">
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>Precio: ${precio}</Card.Text>
                <Link to={`/item/${id}`} className='Option'>
                <Button variant="outline-dark">Detalle</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}


export default Item;


