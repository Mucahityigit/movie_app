import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTopRatedMovies } from "../../redux/movieSlice";

const Schedule = () => {
  const dispatch = useDispatch();
  const { genres, topRatedMovies } = useSelector((state) => state.movies);
  const [filterMovies, setFilterMovies] = useState([]);
  const [pageCount, setPageCount] = useState([]);
  const [start, setStart] = useState(1);
  const [active, setActive] = useState(null);
  const etiketleriYinele = () => {
    const etiketler = [];
    for (let i = start; i < start + 5; i++) {
      etiketler.push(
        <li
          key={i}
          onClick={(e) => handleActiveClass(e)}
          className="schedule-page-li"
        >
          <a
            href="#schedule"
            className={`flex items-center justify-center px-3 h-8 leading-tight  border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white`}
          >
            {i}
          </a>
        </li>
      );
    }
    setPageCount(etiketler);
  };
  useEffect(() => {
    etiketleriYinele();
  }, [start]);

  const handleActiveClass = (e) => {
    const elements = document.querySelectorAll(".schedule-page-li"); // Your container class that wraps the li elements
    dispatch(getTopRatedMovies(e.target.innerHTML));
    elements.forEach((element) => {
      if (element !== e.currentTarget) {
        element.children[0].classList.remove("activePage");
      }
    });

    e.target.classList.add("activePage");
  };
  const increaseCount = () => {
    if (start == 51 - 5) {
      return setStart(1);
    }
    setStart(start + 3);
  };
  const decreaseCount = () => {
    if (start == 1) {
      return setStart(1);
    } else {
      setStart(start - 3);
    }
  };
  useEffect(() => {
    dispatch(getTopRatedMovies(1));
  }, []);
  useEffect(() => {
    setFilterMovies(topRatedMovies);
  }, [topRatedMovies]);

  const handleFilterMovie = (category) => {
    let filters = [];
    if (category === 0) {
      setFilterMovies(topRatedMovies);
      return;
    } else {
      topRatedMovies.map((movie) => {
        if (movie.genre_ids.includes(category)) {
          filters.push(movie);
        }
      });
      setFilterMovies(filters);
    }
  };
  return (
    <section id="schedule" className="schedule flex flex-col items-center">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
      </div>
      <div className="row">
        <ul className="filters">
          <li className={`active`} onClick={() => handleFilterMovie(0)}>
            ALL
          </li>
          {Object.entries(genres) &&
            Object.entries(genres).length > 0 &&
            Object.entries(genres)[0][1].map((genre) => (
              <li
                key={genre.id}
                className={`active`}
                onClick={() => handleFilterMovie(genre.id)}
              >
                {genre.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="mt-5 movie-card-container justify-center">
        {filterMovies && filterMovies.length > 0 ? (
          filterMovies.map((movie) => <Card key={movie.id} movie={movie} />)
        ) : (
          <span className="categoryNull">
            There are no movies in this category.
          </span>
        )}
      </div>
      {filterMovies && filterMovies.length >= 20 && (
        <div className="mt-5">
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm">
              <li>
                <div
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight border  rounded-s-lg  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer"
                  onClick={decreaseCount}
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </div>
              </li>
              {pageCount.map((etiket, index) => (
                <div key={index}>{etiket}</div>
              ))}
              <li>
                <div
                  className="flex items-center justify-center px-3 h-8 leading-tight rounded-e-lg  border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer"
                  onClick={increaseCount}
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </section>
  );
};

export default Schedule;
