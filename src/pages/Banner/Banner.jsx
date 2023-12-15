import React, { useState, useEffect } from "react";
import "./banner.css";
import MovieContent from "../../components/MovieContent/MovieContent";
import MovieDate from "../../components/MovieDate/MovieDate";
import PlayBtn from "../../components/PlayBtn/PlayBtn";
import MovieSwiper from "../../components/MovieSwiper/MovieSwiper";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenres,
  getMovieImage,
  getPopularMovies,
} from "../../redux/movieSlice";
const Banner = () => {
  const { popularMovies, genres, movieImage } = useSelector(
    (state) => state.movies
  );
  const [movieID, setMovieID] = useState(466420);
  const dispatch = useDispatch();
  const IMG_URL_POINT = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPopularMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMovieImage(movieID));
  }, [movieID]);

  const handleSlideChange = (id) => {
    setMovieID(id);
  };

  return (
    <div className="banner">
      {popularMovies &&
        popularMovies.length > 0 &&
        popularMovies.map((movie) => (
          <div className="movie" key={movie.id}>
            <img
              src={`${
                movie.backdrop_path
                  ? IMG_URL_POINT + movie.backdrop_path
                  : IMG_URL_POINT + movie.poster_path
              }`}
              alt=""
              className={`bgImg ${movie.id === movieID ? "active" : undefined}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <MovieContent
                    movie={movie}
                    movieID={movieID}
                    genres={genres}
                    movieImage={movieImage}
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <MovieDate movie={movie} movieID={movieID} />
                  <PlayBtn movie={movie} movieID={movieID} />
                </div>
              </div>
            </div>
          </div>
        ))}

      {popularMovies && popularMovies.length > 0 && (
        <MovieSwiper slides={popularMovies} slideChange={handleSlideChange} />
      )}
    </div>
  );
};

export default Banner;
