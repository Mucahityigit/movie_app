import React, { useEffect, useState } from "react";
import "./trend.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import TrendCard from "../../components/TrendCard/TrendCard";
import { useDispatch } from "react-redux";
import { getUpcomingMovies } from "../../redux/movieSlice";
import { useSelector } from "react-redux";
const Trend = () => {
  const dispatch = useDispatch();
  const { upcomingMovies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  return (
    <section id="trend" className="trend">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Coming Soon</h4>
        </div>
        <div className="row">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="trendSwiper"
          >
            {upcomingMovies &&
              upcomingMovies.length > 0 &&
              upcomingMovies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <TrendCard slide={movie} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Trend;
