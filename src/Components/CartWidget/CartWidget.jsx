import "./cartwidget.css";
import carrito from "./imagenes/carrito.png"
import Button from 'react-bootstrap/Button';

const CartWidget = () =>{
    return (
        <Button variant="outline-dark" className="cartWidget">
            <img className="carrito" src={carrito} alt="carrito-de-compra"/>
            <p className="numCart">0</p>
        </Button>
    );
};

export default CartWidget;