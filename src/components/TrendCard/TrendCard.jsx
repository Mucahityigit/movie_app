import React from "react";
import "./trendCard.css";
const TrendCard = ({ slide }) => {
  return (
    <div className="trend-card">
      <img src={slide.previewImg} alt="Preview Image" className="img-fluid" />
      <a href="#">
        Add to calander <ion-icon name="calendar-outline"></ion-icon>
      </a>
    </div>
  );
};

export default TrendCard;
