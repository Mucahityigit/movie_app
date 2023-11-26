import React, { useState, useEffect } from "react";
import "./banner.css";
import MovieContent from "../../components/MovieContent/MovieContent";
import MovieDate from "../../components/MovieDate/MovieDate";
import PlayBtn from "../../components/PlayBtn/PlayBtn";
import MovieSwiper from "../../components/MovieSwiper/MovieSwiper";
import {useDispatch, useSelector } from "react-redux";
import { getGenres, getMovieDetails, getMovies } from "../../redux/movieSlice";
const Banner = () => {
  const [movieID, setMovieID] = useState();
  const dispatch = useDispatch();
  const {movies,genres} = useSelector(state=>state.movies)
  const IMG_URL_POINT = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    dispatch(getMovies())
    dispatch(getMovieDetails(movieID))
    dispatch(getGenres())
  }, []);
  const handleSlideChange = (id) => {
    setMovieID(id);
    dispatch(getMovieDetails(id))
  };

  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <img
              src={`${IMG_URL_POINT + movie.backdrop_path}`}
              alt="Bacground Image"
              className={`bgImg ${movie.id === movieID ? "active" : undefined}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <MovieContent movie={movie} movieID={movieID} genres={genres} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <MovieDate movie={movie}  movieID={movieID} />
                  <PlayBtn movie={movie}  movieID={movieID} />
                </div>
              </div>
            </div>
          </div>
        ))}

      {movies && movies.length > 0 && (
        <MovieSwiper slides={movies} slideChange={handleSlideChange} />
      )}
    </div>
  );
};

export default Banner;
