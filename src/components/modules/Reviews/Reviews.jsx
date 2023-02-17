import s from "./reviews.modile.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getMovieReviews } from "..//Api/moviesApi";
const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const movieId = useParams().id;

    useEffect(()=>{
        getMovieReviews(movieId).then(res => setReviews(res.results)).catch(() => alert('Some problems with API'));
    },[movieId]);

    return (
        <ul className ={s.listrev}>
            { reviews.length > 0 ? 
              reviews.map((element)=>{ return <li  key={ nanoid() }>
              <p className={ s.revAuth }>{`Autor: ${ element.author }`}</p>
              <p>{ element.content }</p>
              </li>}) :
              <li>There are no reviews.</li>
            } 
        </ul>

    )
};

export default Reviews;
