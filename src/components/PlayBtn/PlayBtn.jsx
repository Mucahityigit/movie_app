import React, { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import "./playBtn.css";
import Modal from "../Modal/Modal";
const PlayBtn = ({ movie, movieID }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className={`trailer ${movie.id === movieID ? "active" : undefined}`}>
        <a href="#" className="playBtn" onClick={toggleModal}>
          <CiPlay1 className="playIcon" />
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.id === movieID && (
        <Modal
          movie={movie}
          movieID={movieID}
          status={modal}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default PlayBtn;
