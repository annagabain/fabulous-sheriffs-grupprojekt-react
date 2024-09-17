import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation(); //  the current route location

    // Determine the css class name based on the current path. important for showing landing page differently
    const headerClass = location.pathname === "/" ? 'landing-page-header' : 'header';

    return (
        <nav className={headerClass}>
            <NavLink to="/"><img src='src/assets/logo-fabulous-sheriffs.png' className="logo" alt="Logo" /></NavLink>
            <NavLink to="search-page">Search</NavLink>
            <NavLink to="favorites-page">Favorites</NavLink>
        </nav>
    );
}
