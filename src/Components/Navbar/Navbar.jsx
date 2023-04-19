import CartWidget from "../CartWidget";
import "./navbar.css";
import logoTaza from "./imagenes/taza.png"
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
        <div className="navbar">
            <img className="logoTaza" src={logoTaza} alt="Logo"/>
            <h1>Frikis Mugs</h1>
            <Button variant="outline-light">Home</Button>
            <Button variant="outline-light">Mugs</Button>
            <Button variant="outline-light">Contacto</Button>
            <CartWidget/>
        </div>
    );
};

export default NavBar;