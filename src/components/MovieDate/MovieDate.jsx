import React from "react";
import "./movieDate.css";
const MovieDate = ({ movie,movieID }) => {
  return (
    <div className={`date ${movie.id === movieID ? "active" : undefined}`}>
      <h2>{movie.release_date}</h2>
    </div>
  );
};

export default MovieDate;
