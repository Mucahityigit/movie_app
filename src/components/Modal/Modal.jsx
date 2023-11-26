import React, { useEffect, useState } from "react";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovieVideo } from "../../redux/movieSlice";
import { object } from "prop-types";

const Modal = ({ movie, status, toggleModal,movieID }) => {
  const [youtubeKey,setYoutubeKey] = useState(null)
  const {movieVideo} = useSelector(state=>state.movies)
  const dispatch = useDispatch()

  // let videoKey;
  // movieVideo.map(movie=>{
  //   if(movie.type==="Trailer"){
  //     videoKey = Object.entries(movie)[3][1]
  //   }
  // })
  useEffect(() => {
    dispatch(getMovieVideo(movieID));
  }, [dispatch, movieID]);

  useEffect(() => {
    let videoKey = null;
    movieVideo.forEach((video) => {
      if (video.type === "Trailer") {
        videoKey = Object.entries(video)[3][1];
      }
    });
    setYoutubeKey(videoKey);
  }, [movieVideo]);


  return (
    <div className={`movieModal ${status ? "active" : undefined}`}>
      <a href="#" className="modalClose" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
      </a>
      <iframe
        width="1280"
        height="720"
       src={`https://www.youtube.com/embed/${youtubeKey}`}
        title={`${movie.original_title}| Official Trailer`}
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Modal;
