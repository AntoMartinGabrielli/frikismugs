import "./cartwidget.css";
import carrito from "./imagenes/carrito.png"

const CartWidget = () =>{
    return (
        <div className="cartWidget">
            <img className="carrito" src={carrito} alt="carrito-de-compra"/>
            <p className="numCart">0</p>
        </div>
    );
};

export default CartWidget;