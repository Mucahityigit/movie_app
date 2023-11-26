import React, { useState, useEffect } from "react";
import "./banner.css";
import MovieContent from "../../components/MovieContent/MovieContent";
import MovieDate from "../../components/MovieDate/MovieDate";
import PlayBtn from "../../components/PlayBtn/PlayBtn";
import MovieSwiper from "../../components/MovieSwiper/MovieSwiper";
const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [movieID, setMovieID] = useState(937249);
  const [movieDetail, setMovieDetail] = useState([]);

  const IMG_URL_POINT = "https://image.tmdb.org/t/p/original";
  const fatchData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTk1NTM5YzExOWQ4YmRkNjc0MDQ5NTI0MDIxODZkZSIsInN1YiI6IjY1NWMzMmY5MTA5MjMwMDEzOGM3ZTQzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.68uCRBqGm9ARFy_eNGjmSK3ZVGh_rRWq1IjQPxNdYxo",
      },
    };
    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => setMovies(Object.entries(data)[2][1]))
      .catch((err) => console.error("error:" + err));
  };
  const getMovieDetail = async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTk1NTM5YzExOWQ4YmRkNjc0MDQ5NTI0MDIxODZkZSIsInN1YiI6IjY1NWMzMmY5MTA5MjMwMDEzOGM3ZTQzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.68uCRBqGm9ARFy_eNGjmSK3ZVGh_rRWq1IjQPxNdYxo",
      },
    };

    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data))
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    fatchData();
    getMovieDetail(movieID);
  }, []);
  const handleSlideChange = (id) => {
    setMovieID(id);
    getMovieDetail(id);
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
                  <MovieContent movieDetail={movieDetail} movieID={movieID} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <MovieDate movie={movie} />
                  <PlayBtn movie={movie} />
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
