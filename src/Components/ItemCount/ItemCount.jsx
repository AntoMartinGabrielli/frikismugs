import './ItemCount.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'

const ItemCount = ({stock, inicial, onAdd}) =>{
    const [cantidad, setCantidad] = useState(inicial)

    const increment = () => {
        if (cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    const decrement = () => {
        if (cantidad > 1) {
            setCantidad(cantidad-1)
        }
    }

    return(
        <div className='Contador'>
            <div className='Controles'>
                <Button variant="outline-dark" className='boton' onClick={decrement}> - </Button>
                <h4 className='numero'>{cantidad}</h4>
                <Button variant="outline-dark" className='boton' onClick={increment}> + </Button>
            </div>
            <div>
                <Button variant="outline-dark" className='boton' onClick={()=> onAdd(cantidad)} disabled={!stock}>Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;