import React from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <span>
        <FaSearch color="white" />
      </span>
    </div>
  );
};

export default Search;
