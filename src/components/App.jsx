// import MovieSeach from "./modules/MovieSeach/MovieSeach"
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "pages/NotFounPage/NotFoundPage";
import NavBar from "./modules/Navbar/Navbar";
import HomePage from "pages/Homepage/HomePage";
import MoviesPage from "pages/MoviesPage/MoviesPage";
import MoviesDetailsPage from "pages/MovieDetailsPage/MovieDetailsPage";
import Cast from "./modules/Cast/Cast"
import Reviews from "./modules/Reviews/Reviews"

export const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/movies" element={<MoviesPage/>} />
            <Route path="/movies/:id" element={<MoviesDetailsPage/>}>
              <Route path='cast' element={<Cast/>}/>
              <Route path='reviews' element={<Reviews/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </>
  );
};
