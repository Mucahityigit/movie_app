import React, { useEffect, useState } from "react";
import "./movieContent.css";
import Button from "../Button/Button";

const MovieContent = ({ movieDetail, movieID }) => {
  console.log(movieDetail);
  return (
    <div
      className={`content ${movieDetail.id === movieID ? "active" : undefined}`}
    >
      <span className="movie-original-title">{movieDetail.original_title}</span>
      <h4>
        <span>{movieDetail.release_date}</span>
        <span>
          <i>{movieDetail.ageLimit}</i>
        </span>
        {<span>{movieDetail.length}</span>}
        {Object.entries(movieDetail.genres).map((genre, index) => (
          <span key={index}>{Object.entries(genre[1])[1][1] + ","}</span>
        ))}
      </h4>
      <p>{movieDetail.description}</p>
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
