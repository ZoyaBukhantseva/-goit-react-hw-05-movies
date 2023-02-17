import { NavLink } from "react-router-dom";
import s from './navbar.module.css';


const NavBar = () => {

    return (
      <div className={s.wrapper}>
      <nav className={ s.nav }>
        <NavLink className={ s.link } to="/">Home</NavLink>
        <NavLink className={ s.link } to="/movies">Movies</NavLink>
      </nav>
      </div>
    )
};

export default NavBar;