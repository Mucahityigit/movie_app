import React, { useEffect, useState } from "react";
import "./movieContent.css";
import Button from "../Button/Button";
import PlayBtn from "../PlayBtn/PlayBtn";

const MovieContent = ({ movie, movieID, genres, movieImage }) => {
  const [genresDetail, setGenresDetail] = useState([]);

  let filterGenres = [];
  if (movie.id === movieID) {
    genres.genres.map((genre) => {
      if (movie.genre_ids.includes(genre.id)) {
        filterGenres.push(genre.name);
      }
    });
  }

  useEffect(() => {
    setGenresDetail(filterGenres);
  }, [movieID]);
  return (
    <div className={`content ${movie.id === movieID ? "active" : undefined}`}>
      {movieImage.logos && movieImage.logos.length > 0 ? (
        <img
          className="movie-title"
          src={`https://image.tmdb.org/t/p/original/${movieImage.logos[0].file_path}`}
          alt=""
        />
      ) : (
        <span className="movie-original-title">{movie.original_title}</span>
      )}
      <h4>
        <span className="relase-date">{movie.release_date}</span>
        {<span>{movie.length}</span>}
        <div>
          {genresDetail.map((genre, index) => (
            <span className="genres" key={index}>
              {genre + ","}
            </span>
          ))}
        </div>
      </h4>
      <p>{movie.overview}</p>
      <div className="button">
        <Button
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="Book"
          movieID={movieID}
        />
        <Button
          icon={<ion-icon name="add-outline"></ion-icon>}
          name="my list"
          movieID={movieID}
        />
        <PlayBtn movie={movie} movieID={movieID} />
      </div>
    </div>
  );
};

export default MovieContent;
