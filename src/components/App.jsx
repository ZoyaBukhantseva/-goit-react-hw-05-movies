import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./modules/Louder/Louder"
import NotFoundPage from "pages/NotFounPage/NotFoundPage";
import NavBar from "./modules/Navbar/Navbar";

const HomePage = lazy(() => import("..//pages/Homepage/HomePage.jsx"));;
const MoviesPage = lazy(() => import("..//pages/MoviesPage/MoviesPage"));
const MoviesDetailsPage = lazy(() => import("..//pages/MovieDetailsPage/MovieDetailsPage"));
const Cast = lazy(() => import("./modules/Cast/Cast"));
const Reviews = lazy(() => import("./modules/Reviews/Reviews"));
export const App = () => {
  return (
    <div>
      <NavBar/>
        <Suspense fallback={ <Loader/> }>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/movies" element={<MoviesPage/>} />
            <Route path="/movies/:id" element={<MoviesDetailsPage/>}>
              <Route path='cast' element={<Cast/>}/>
              <Route path='reviews' element={<Reviews/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </Suspense>
    </div>
  );

};
