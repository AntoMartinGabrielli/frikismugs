import './Item.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({id, img, stock, titulo, descripcion, precio, categoria}) => {
    return (
        <Card>
            <Card.Img src={img}></Card.Img>
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>Precio: {precio}</Card.Text>
                <Button>Detalle</Button>
            </Card.Body>
        </Card>
    )
}



