import React, { useEffect, useState } from "react";
import "./movieContent.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getMovieImage } from "../../redux/movieSlice";

const MovieContent = ({ movie, movieID,genres,movieImage }) => {
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
      {movieImage.logos &&
       movieImage.logos.length > 0 ?
        <img className="movie-title" src={`https://image.tmdb.org/t/p/original/${movieImage.logos[0].file_path}`} alt="" /> :
        <span className="movie-original-title">{movie.original_title}</span>
      }
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
