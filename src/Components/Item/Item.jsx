import './Item.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({id, img, stock, titulo, descripcion, precio, categoria}) => {
    return (
        <Card className="item">
            <Card.Img src={img} ></Card.Img>
            <Card.Body className="itemInfo">
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>Precio: {precio}</Card.Text>
                <Button variant="outline-dark" >Detalle</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;


