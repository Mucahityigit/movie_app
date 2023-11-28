import React from "react";
import "./card.css";
const Card = ({ movie }) => {
  const IMG_URL_POINT = "https://image.tmdb.org/t/p/original";

  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className="movie-card">
        <img 
            src={`${IMG_URL_POINT + movie.poster_path}`}
            alt="Preview Image" className="img-fluid" />
        <p>
          {movie.length} | {movie.category}
        </p>
        <div className="content">
          <h4>{movie.original_title}</h4>
          <div className="card-icons">
            <ion-icon name="add-outline"></ion-icon>
            <ion-icon name="play-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
