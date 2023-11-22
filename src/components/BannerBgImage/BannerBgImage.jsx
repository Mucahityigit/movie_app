import React from "react";
import "./bannerBgImage.css";
import bgImage from "../../assets/images/bg-transformer.jpg";

const BannerBgImage = ({ movie, movieID }) => {
  const IMG_URL_POINT = "https://image.tmdb.org/t/p/original";

  return (
    <img
      src={` ${
        movie.id === movieID ? IMG_URL_POINT + movie.backdrop_path : bgImage
      } `}
      alt="Bacground Image"
      className="bgImg active"
    />
  );
};

export default BannerBgImage;
