import React from "react";
import "./trendCard.css";
const TrendCard = ({ slide }) => {
  const IMG_URL_POINT = "https://image.tmdb.org/t/p/original";

  return (
    <div className="trend-card">
      <img
        src={`${IMG_URL_POINT + slide.poster_path}`}
        alt="Preview Image"
        className="img-fluid"
      />
      <a href="#">
        Add to calander <ion-icon name="calendar-outline"></ion-icon>
      </a>
    </div>
  );
};

export default TrendCard;
