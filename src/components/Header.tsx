import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <nav className='header'>
            {/* <NavLink to="/">Landing Page </NavLink> */}
            <NavLink to="/"><img src='src\assets\logo-fabulous-sheriffs.png' className="logo" /></NavLink>
            <NavLink to="search-page" >Search Page</NavLink>
            <NavLink to="favorites-page" >Favorites Page</NavLink>
        </nav>
    );
}
