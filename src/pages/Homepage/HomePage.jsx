
import { useState, useEffect, lazy, Suspense } from "react";
import { trendingMovies } from "../../components/modules/Api/moviesApi";
import Loader from "..//../components/modules/Louder/Louder";
const FilmList = lazy(() => import("..//..//components/modules/FilmList/FilmList"))
const HomePage = () => {

    const[films, setFilms] = useState([]);

    useEffect (()=>{
        trendingMovies().then(res=> setFilms(res)).catch(() => alert('Some problems with API'));
    }, []);


    return (
        <Suspense fallback={ <Loader/> }>   
           <FilmList title="Trending today" films={ films } />    
        </Suspense>
    );
};
export default HomePage;
