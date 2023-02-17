import axios from "axios";

const apiKey = 'cc6dd9af32d8d8ae276f4cac0bcc6f4a';

export async function trendingMovies () {
   return await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`).then(result => result.data.results);
};

export async function getMoviesByName (filmName) {
   return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${filmName}&page=1&include_adult=false`).then(result => result.data.results);
};

export async function getMovieInfo (filmid) {
   return await axios.get(`https://api.themoviedb.org/3/movie/${filmid}?api_key=${apiKey}&language=en-US`).then(result => result.data);
};

export function getImageUrl(imgName, imgSize) {
   return `https://image.tmdb.org/t/p/w${imgSize}/${imgName}`;
};

export async function getGenresList(genresIds) {
   
   const request = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`).then(res=> res.data.genres);

   return request.reduce ((acc, element) => {
      if (genresIds.includes(element.id)){ acc.push(element.name) }     
      return acc;
   }, []); 
};

export async function getMovieCast (filmid) {
   return await axios.get(`https://api.themoviedb.org/3/movie/${filmid}/credits?api_key=${apiKey}&language=en-US`).then(result => result.data);
};

export async function getMovieReviews (filmid) {
   return await axios.get(`https://api.themoviedb.org/3/movie/${filmid}/reviews?api_key=${apiKey}&language=en-US&page=1`).then(result => result.data);
};