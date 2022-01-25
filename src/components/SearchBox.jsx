import React from "react";
import { FaSearchLocation } from "react-icons/fa";
const SearchBox = (props) => {
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search location..."
          value={props.inputCity}
          onChange={props.handleChangeInput}
        />
        <button
          className="searchBtn"
          type="button"
          onClick={props.handleSearch}
        >
          <FaSearchLocation />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
