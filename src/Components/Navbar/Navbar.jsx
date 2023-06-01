import CartWidget from "../CartWidget";
import "./navbar.css";
import logoTaza from "./imagenes/taza.png"
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar">
            <Link to='/'>
            <img className="logoTaza" src={logoTaza} alt="Logo"/>
            </Link>
            <h1 to='/'>Frikis Mugs</h1>
            <div className="nbBtn">
                <NavLink className="btn btn-outline-dark" to={'/category/Harry Potter'}>Harry Potter</NavLink>
                <NavLink className="btn btn-outline-dark" to={'/category/Disney'}>Disney</NavLink>
                <NavLink className="btn btn-outline-dark" to={'/category/Series'}>Series</NavLink>
            </div>
            <CartWidget />
        </div>
    );
};

export default NavBar;