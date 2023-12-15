import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteBookmark,
  deleteList,
  setBookmark,
  setList,
} from "../../redux/listOperationsSlice";

const HeaderModal = ({ modal, value, onClose }) => {
  const [movie, setMovie] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Modal dışına tıklanırsa ve tıklanan element modal içeriği değilse modalı kapat
      if (modal && !event.target.closest(".modal-class")) {
        onClose(); // Modalı kapatma fonksiyonu
      }
    };

    // Event Listener ekle
    document.addEventListener("mousedown", handleClickOutside);

    // Event Listener'ı temizle
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modal, onClose]);
  useEffect(() => {
    const fetchMovie = async (movieId) => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTk1NTM5YzExOWQ4YmRkNjc0MDQ5NTI0MDIxODZkZSIsInN1YiI6IjY1NWMzMmY5MTA5MjMwMDEzOGM3ZTQzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.68uCRBqGm9ARFy_eNGjmSK3ZVGh_rRWq1IjQPxNdYxo",
        },
      };

      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setMovie((prevMovies) => [...prevMovies, json]);
      } catch (err) {
        console.error("error:" + err);
      }
    };
    setMovie([]);
    if (value && value.length > 0) {
      value.forEach((movieId) => fetchMovie(movieId));
    }
  }, [value]);

  const deleteMovie = (movieID) => {
    const updatedMovies = movie.filter(
      (movieDetail) => movieDetail.id !== movieID
    );
    setMovie(updatedMovies);

    if (modal === "listModal") {
      dispatch(deleteList(movieID));
    }
    if (modal === "bookmarkModal") {
      dispatch(deleteBookmark(movieID));
    }
  };

  return (
    <div className="absolute top-[40px] right-1 min-w-[300px] modal-class">
      <div className="w-full max-w-md p-4 border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none  text-white">
            Latest Customers
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {movie && movie.length > 0 ? (
              movie.map((movieDetail) => (
                <li key={movieDetail.id} className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium truncate dark:text-white">
                        {movieDetail.original_title}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {movieDetail.tagline}
                      </p>
                    </div>
                    <div
                      onClick={() => deleteMovie(movieDetail.id)}
                      className="inline-flex items-center justify-center text-xl text-base font-semibold dark:text-white w-8 h-8 cursor-pointer hover:text-[#1A98FF]"
                    >
                      <MdDeleteOutline />
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-500 ">
                There is no movie to show
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderModal;
