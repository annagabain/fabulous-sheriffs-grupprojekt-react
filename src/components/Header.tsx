import { NavLink, useLocation } from "react-router-dom";
import logo from '../assets/logo-fabulous-sheriffs.png';

export default function Header() {
    const location = useLocation(); //  the current route location

    // Determine the css class name based on the current path. important for showing landing page differently
    const headerClass = location.pathname === "/" ? 'landing-page-header' : 'header';

    return (
        <nav className={headerClass}>
            <NavLink to="/">
                <img src={logo} className="logo" alt="Logo" />
            </NavLink>
            <NavLink 
                to="/search-page"
                className={({ isActive }) => isActive ? 'active-link' : ''} 
            >
                Search
            </NavLink>
            <NavLink 
                to="/favorites-page"
                className={({ isActive }) => isActive ? 'active-link' : ''} 
            >
                Favorites
            </NavLink>
        </nav>
    );
}
