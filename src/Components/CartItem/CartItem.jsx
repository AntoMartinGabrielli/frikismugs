import './CartItem.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';



export const CartItem = ({ id, titulo, precio, cantidad, }) => {
    const {removeItem} = useContext(CartContext);

    return(
    <Card className='cardCart' key={id}>
        <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>Cantidad {cantidad}</Card.Text>
            <Card.Text>Precio por unidad ${precio}</Card.Text>
            <Card.Text>Subtotal ${precio*cantidad}</Card.Text>
            <Button onClick={() => removeItem(id)}>X</Button>
        </Card.Body>
    </Card>
    )
    };

export default CartItem;