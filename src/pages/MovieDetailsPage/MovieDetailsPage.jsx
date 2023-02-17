import s from "./moviesdetails.module.css";
import { getMovieInfo, getImageUrl, getGenresList } from "..//..//components/modules/Api/moviesApi";
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {

    const location = useLocation();
    const movieId = useParams().id;
    const [ movie, setMovie ] = useState([]);
    const [ genres, setGenres ] = useState([]);
    const [ img, setImg] = useState('');  
    const [ defaultBackLink, setdefaultBackLink] = useState('');

    useEffect(()=>{
        location.state && setdefaultBackLink(location.state.from);
    },[location.state]);  

    useEffect (()=>{
        getMovieInfo(movieId).then(res => { 
            setMovie(res);
            setImg(res.poster_path? 
                   getImageUrl(res.poster_path, 300):"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder");
            const genresIdList =  res.genres.map((elem)=>{ return elem.id });
            getGenresList(genresIdList).then(res=>setGenres(res)).catch(() => alert('Some problems with API'));      
        }).catch(() => alert('Some problems with API'));
    },[movieId]);
       
    const backLink = location.state?.from ?? defaultBackLink;

    return (
        <>
        <Link to={ backLink } className={ s.movieBackButton }>{`<-`} Go Back</Link>
        <div className={ s.movieCard }>
            <div className={ s.mainInfo }>
                <img src={ img } alt={ movie.title } className={ s.poster }/>
                <div className={ s.leftInfo}>
                    <span className={ s.title }>{ movie.title }</span>
                    <span className={ s.overview }>{`User score: ${movie.vote_average}`}</span>
                    <span className={ s.category }>Overview</span>
                    <p className={ s.overview }>{ movie.overview }</p>
                    <span className={ s.category }>Genres</span>
                    
                        <ul className={ s.genresList }>
                        { genres.map((elem)=> <li key={ elem }>{ elem }</li> ) }
                        </ul>
                </div> 
            </div>
                <p className={ s.aditional }>Additional information</p>
                <ul className={ s.aditionalul }>
                   <li ><Link className={s.aditionallink} to={`/movies/${movieId}/cast`}>Cast</Link></li>
                   <li ><Link className={s.aditionallink} to={`/movies/${movieId}/reviews`} >Reviews</Link></li>
                </ul>
            <div className={ s.linkInfo }>
                <Outlet/>
            </div>
        </div>
        </>
    )
}

export default MovieDetails;
