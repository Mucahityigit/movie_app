import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";

const Schedule = () => {
  const {genres,movies} = useSelector(state=>state.movies)
  const [filterMovies, setFilterMovies] = useState([]);


  useEffect(() => {
      setFilterMovies(movies);
  }, [movies]);


  const handleFilterMovie = (category) => {
    let filters = [];
    if (category === 0) {
      setFilterMovies(movies);
      return;
    }else{
      movies.map((movie) => {
        if(movie.genre_ids.includes(category)){
          filters.push(movie);
        }
      })
      setFilterMovies(filters);
    }
  };
 console.log(filterMovies)
  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
      </div>
      <div className="row">
        <ul className="filters">
        <li className={`active`}
            onClick={() => handleFilterMovie(0)}
        >
          ALL
        </li>
          {
            Object.entries(genres) &&
            Object.entries(genres).length > 0 &&
            Object.entries(genres)[0][1].map((genre) => (
              <li
                key={genre.id}
                className={`active`}
                onClick={() => handleFilterMovie(genre.id)}
              >
                {genre.name}
              </li>
          ))}
        </ul>
      </div>
      <div className="row mt-5">
        {filterMovies &&
          filterMovies.length > 0 ?
          filterMovies.map((movie) => <Card key={movie.id} movie={movie} />) :
          <span className="categoryNull">There are no movies in this category.</span>
        }
      </div>
    </section>
  );
};

export default Schedule;

