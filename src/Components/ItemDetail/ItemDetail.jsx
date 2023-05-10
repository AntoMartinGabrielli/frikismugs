import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

/* const ItemDetail = ({id,img, titulo, descripcion, stock, precio }) => {
    return (
        <div>
          <div>
            <img src={img} />
          </div>
          <div>
            <h4>{titulo}</h4>
          </div>
          <div>
            <p>{descripcion}</p>
          </div>
          <div>Precio:{precio}</div>
          <ItemCount></ItemCount>
        </div>
    );
  }; */

/* const ItemDetail = ({id,img,stock,titulo,descripcion,precio,categoria}) => {
    return (
        <Card>
            <header>
                <h2>{titulo}</h2>
            </header>
            <img src={img} alt=''></img>
            <div>
                <p>Precio: {precio}</p>
            </div>
            <footer>
                <Button variant="outline-dark">Detalle</Button>
                <ItemCount inicial={1} stock={10} onAdd={(cantidad)=> console.log('Cantidad agregada', cantidad)}></ItemCount>
            </footer>
        </Card>
    )
} */

export default ItemDetail;