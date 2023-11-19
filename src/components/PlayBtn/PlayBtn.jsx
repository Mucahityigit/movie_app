import React, { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import "./playBtn.css";
import Modal from "../Modal/Modal";
const PlayBtn = ({ movie }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className={`trailer ${movie.active ? "active" : undefined}`}>
        <a href="#" className="playBtn" onClick={toggleModal}>
          <CiPlay1 className="playIcon" />
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.active && (
        <Modal movie={movie} status={modal} toggleModal={toggleModal} />
      )}
    </>
  );
};

export default PlayBtn;
