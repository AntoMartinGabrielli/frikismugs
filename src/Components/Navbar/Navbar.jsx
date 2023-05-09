import CartWidget from "../CartWidget";
import "./navbar.css";
import logoTaza from "./imagenes/taza.png"
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
        <div className="navbar">
            <img className="logoTaza" src={logoTaza} alt="Logo"/>
            <h1>Frikis Mugs</h1>
            <Button variant="outline-light">Harry Potter</Button>
            <Button variant="outline-light">Disney</Button>
            <Button variant="outline-light">Series</Button>
            <CartWidget/>
        </div>
    );
};

export default NavBar;