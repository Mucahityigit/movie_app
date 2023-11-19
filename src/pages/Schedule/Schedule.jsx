import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "../../components/Card/Card";

const Schedule = () => {
  const filterList = [
    {
      _id: 1,
      name: "All",
      active: true,
    },
    {
      _id: 2,
      name: "Romance",
      active: false,
    },
    {
      _id: 3,
      name: "Action",
      active: false,
    },
    {
      _id: 4,
      name: "Thriller",
      active: false,
    },
    {
      _id: 5,
      name: "Horror",
      active: false,
    },
    {
      _id: 6,
      name: "Advanture",
      active: false,
    },
  ];
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);

  const fatchData = () => {
    fetch("http://localhost:5173/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fatchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleFilterMovie = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );
    if (category === "All") {
      setMovies(data);
      return;
    }
    const getMovies = data.filter((m) => m.category === category);
    setMovies(getMovies);
  };
  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
      </div>
      <div className="row">
        <ul className="filters">
          {filters.map((filter) => (
            <li
              key={filter._id}
              className={`${filter.active ? "active" : null}`}
              onClick={() => handleFilterMovie(filter.name)}
            >
              {filter.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="row mt-5">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <Card key={movie._id} movie={movie} />)}
      </div>
    </section>
  );
};

export default Schedule;
