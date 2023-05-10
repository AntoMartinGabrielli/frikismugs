import CartWidget from "../CartWidget";
import "./navbar.css";
import logoTaza from "./imagenes/taza.png"
/* import Button from 'react-bootstrap/Button'; */
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar">
            <Link to='/'>
            <img className="logoTaza" src={logoTaza} alt="Logo"/>
            </Link>
            <h1 to='/'>Frikis Mugs</h1>
            <div>
                <NavLink to={`/category/HarryPotter`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}/>
                <NavLink to={`/category/Disney`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}/>
                <NavLink to={`/category/Series`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}/>
            </div>
            {/* <Button variant="outline-dark">Harry Potter</Button>
            <Button variant="outline-dark">Disney</Button>
            <Button variant="outline-dark">Series</Button> */}
            <CartWidget />
        </div>
    );
};

export default NavBar;