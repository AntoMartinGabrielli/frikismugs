import './CartItem.css';
import Card from 'react-bootstrap/Card';

export const CartItem = ({item})  => (
    <Card key={item.id}>
		<Card.Img src={item.img} />
		<Card.Body>
			<Card.Title>{item.titulo}</Card.Title>
			<Card.Text>Precio{item.precio}</Card.Text>
		</Card.Body>
	</Card>
)

export default CartItem;