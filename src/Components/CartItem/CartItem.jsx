import './CartItem.css';
import Card from 'react-bootstrap/Card';


export const CartItem = ({ id, titulo, precio, cantidad, }) => (
    <Card className='cardCart' key={id}>
        <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>Cantidad {cantidad}</Card.Text>
            <Card.Text>Precio por unidad{precio}</Card.Text>
            <Card.Text>Subtotal{}</Card.Text>
        </Card.Body>
    </Card>
);

export default CartItem;