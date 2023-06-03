import "./cartwidget.css";
import carrito from "./imagenes/carrito.png"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {Link} from 'react-router-dom';

const CartWidget = () =>{
    const {cantidadTotal} = useContext(CartContext)

    return (
        <Link to='/cart' variant="outline-dark" className="cartWidget" style={{display: cantidadTotal () > 0 ? 'block' : 'none'}}>
            <img className="carrito" src={carrito} alt="carrito-de-compra"/>
            {cantidadTotal()}
        </Link>
    );
};

export default CartWidget;