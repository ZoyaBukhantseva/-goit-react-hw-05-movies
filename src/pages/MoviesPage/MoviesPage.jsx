import { useState, useEffect, lazy, Suspense } from 'react';
import { getMoviesByName } from "..//..//components/modules/Api/moviesApi";
import { useSearchParams } from "react-router-dom";
import s from "./movies.module.css";
import Loader from "..//..//components/modules/Louder/Louder";

const FilmList = lazy(() => import("..//..//components/modules/FilmList/FilmList"));

const MoviesPage = () => {

    const [fdFilms, setFdFilm ] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
   
    const queryFilm = searchParams.get('query');

    const hendleSubmit = (e) => {
       e.preventDefault();
       const query = e.target.elements.searchWord.value;
       setSearchParams({'query': query});
    }

    useEffect (()=>{
       !queryFilm || getMoviesByName(queryFilm).then(res => setFdFilm(res)).catch(() =>'Some problems with API');
    },[queryFilm]);

    return(
        <>
        <form className={ s.form } onSubmit={ hendleSubmit }>
            <input className={ s.input } placeholder="enter movie name" type="text" name="searchWord" defaultValue={ queryFilm }/>
            <button className={ s.button }  type="submit">Search</button>
        </form>
         <Suspense fallback={ <Loader/> }>
             <FilmList films={ fdFilms }/>
         </Suspense>
        </>
    );
}

export default MoviesPage;