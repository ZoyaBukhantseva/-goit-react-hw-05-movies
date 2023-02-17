import s from "./film-list.module.css";
import PropTypes  from 'prop-types';
import { Link, useLocation } from "react-router-dom";

const FilmList =({ title , films })=> {

    const location = useLocation();

    return (
        <>
           { title && <h2 className={s.filmlisttitle}>{ title }</h2> }
            <ul className={ s.filmlist }>
               { films.map((element)=>{ 
                return <li className={s.filmitem}  key={ element.id }>
                <Link className={s.filmlink}  to = {`/movies/${element.id}`} state={{ from: location } }>{element.title}</Link>
                </li> 
                }) }
            </ul>
        </>
    );
};

FilmList.propTypes = {
    title: PropTypes.string,
    film: PropTypes.arrayOf(
        PropTypes.shape({ 
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired 
        })
    )
}

export default FilmList;