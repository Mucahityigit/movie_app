import React, { useState, useEffect } from "react";
import "./banner.css";
import MovieContent from "../../components/MovieContent/MovieContent";
import MovieDate from "../../components/MovieDate/MovieDate";
import PlayBtn from "../../components/PlayBtn/PlayBtn";
import MovieSwiper from "../../components/MovieSwiper/MovieSwiper";
const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [movieID, setMovieID] = useState(937249);
  const [genres, setGenres] = useState([]);
  const [stateCheck, setStateCheck] = useState(false)
  // const [genreData, setGenreData] = useState([]);
  // const [genresFilter, setGenresFilter] = useState([])


  const IMG_URL_POINT = "https://image.tmdb.org/t/p/original";
  const fatchData = () => {

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
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setMovies(Object.entries(data)[2][1]))
      .catch((err) => console.error("error:" + err));
  };
  const fetchGenderData = ()=>{
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTk1NTM5YzExOWQ4YmRkNjc0MDQ5NTI0MDIxODZkZSIsInN1YiI6IjY1NWMzMmY5MTA5MjMwMDEzOGM3ZTQzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.68uCRBqGm9ARFy_eNGjmSK3ZVGh_rRWq1IjQPxNdYxo'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(data => setGenres(Object.entries(data)[0][1]))
      .catch(err => console.error('error:' + err));
  }
  useEffect(() => {
    fatchData();
    fetchGenderData()
  }, []);

  // useEffect(()=>{
  //   let genresId = [];
  //   genres.map(genre=>{
  //     genresId.push(genre.id)
  //   })
  //   setGenresFilter(genresId)
  // },[genres])

  const handleSlideChange = (id) => {
    setMovieID(id);
    setStateCheck(true)
  };
  
  // {  setGenresFilter(genres.id.includes(53))}

  
  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div className="movie" key={movie.id}>
             {movie.id===movieID?(
              <img src={`${IMG_URL_POINT + movie.backdrop_path }`}
              alt="Bacground Image"
              className={`bgImg ${stateCheck ? "active" : undefined}`}/>
             ):undefined}
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                   
                  <MovieContent movie={movie} movieID={movieID} genres={genres} />
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
