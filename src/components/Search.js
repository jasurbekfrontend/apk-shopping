import React from "react";
import search from "../assets/svg/search.svg";

const Search = () => {
  return (
    <div className="search">
      <button>
        <img src={search} alt="" />
      </button>
      <input type="search" placeholder="Search" />
    </div>
  );
};

export default Search;
