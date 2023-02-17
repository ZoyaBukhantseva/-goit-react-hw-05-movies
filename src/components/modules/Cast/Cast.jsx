
import { useParams } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import s from "./cast.module.css"
import Loader from "..//Louder/Louder"
import { getMovieCast, getImageUrl } from "..//Api/moviesApi"
const CastCard = lazy(()=> import ("./CastCard/CastCard") );

const Cast = () => {

    const [cast, setCast] = useState([]);
    const movieId = useParams().id;

    useEffect(()=>{
        getMovieCast (movieId).then(res => setCast(res.cast.slice(0,5))).catch(() => alert('Some problems with API'));
    },[movieId]);
    return (
        <ul className={s.list }>
          <Suspense fallback = { <Loader/> }>
            { cast.length > 0 ?
              cast.map((element)=>{ return <li key={ element.id }>               
                <CastCard 
                    castImg = { element.profile_path ? 
                        getImageUrl(element.profile_path, 300) : 
                        'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder' }
                    castName = { element.name }
                    castCharacter = { element.character}
                />
            </li>}) : 
            <li>There are no cast info.</li> }    
           </Suspense>         
        </ul>
    )
};
export default Cast;