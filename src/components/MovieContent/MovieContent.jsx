import React, { useEffect, useState } from "react";
import "./movieContent.css";
import Button from "../Button/Button";

const MovieContent = ({ movie, movieID,genres }) => {
  
  const [genresDetail,setGenresDetail] = useState([])

  let filterGenres = [];
  if(movie.id===movieID){
    genres.genres.map(genre=>{
      if(movie.genre_ids.includes(genre.id)){
       filterGenres.push(genre.name)
      }
    })
  }

  useEffect(()=>{
    setGenresDetail(filterGenres)
  },[movieID])

  return (
    <div
      className={`content ${movie.id === movieID ? "active" : undefined}`}
    >
      <span className="movie-original-title">{movie.original_title}</span>
      <h4>
        <span>{movie.release_date}</span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        {<span>{movie.length}</span>}
        {genresDetail.map((genre, index) => (
          <span key={index}>{genre + ","}</span>
        ))}
      </h4>
      <p>{movie.description}</p>
      <div className="button">
        <Button
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="Book"
          color="#ff3700"
          bgColor="#fff"
        />
        <Button
          icon={<ion-icon name="add-outline"></ion-icon>}
          name="my list"
        />
      </div>
    </div>
  );
};

export default MovieContent;
