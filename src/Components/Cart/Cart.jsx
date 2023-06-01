import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import {Link} from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';
import CartItem from '../CartItem/CartItem';

const Cart = () =>{
    const { cart, clearCart, cantidadTotal, total } = useContext(CartContext) 

    if (cantidadTotal === 0) {
        return (
            <div>
                <h1>No hay tazas en el carrito</h1>
                <Link to='/' className='Option'>Ver tazas</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <Button onClick={() => clearCart()} className='Button'>Limpiar Carrito</Button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart;