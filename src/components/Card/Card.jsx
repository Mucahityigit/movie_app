import React from "react";
import "./card.css";
const Card = ({ movie }) => {
  const IMG_URL_POINT = "https://image.tmdb.org/t/p/w500";
  return (
      <div className="movie-card">
        <img 
            src={`${IMG_URL_POINT + movie.poster_path}`}
            alt="Preview Image" className="img-fluid" />
        <div className="content">
          <h4>{movie.original_title}</h4>
          <div className="card-icons">
            <ion-icon name="add-outline"></ion-icon>
            <ion-icon name="play-outline"></ion-icon>
          </div>
          <p>{movie.overview.slice(0, 205)}...</p>
        </div>
      </div>
  );
};

export default Card;
