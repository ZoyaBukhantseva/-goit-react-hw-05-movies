import { NavLink } from "react-router-dom";
import s from './navbar.module.css';


const NavBar = () => {

    return (
      <nav className={ s.nav }>
        <NavLink className={ s.link } to="/">Home</NavLink>
        <NavLink className={ s.link } to="/movies">Movies</NavLink>
      </nav>
    )
};

export default NavBar;