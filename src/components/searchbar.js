// SearchBar.js
import React, { useState } from "react";
import img1 from "../assets/Search icon.png";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e === "Enter") {
      setQuery(e.target.value);
      onSearch(query);
    }
    onSearch(query);
  };

  return (
    <div className="search-container">
      <div>
        <div className="input-container">
          <div className="relative  rounded-md search-input">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              onKeyUp={handleSearch}
              className="rounded-xl  py-1.5 pl-8  text-gray-900  placeholder:text-gray-400 sm:text-sm "
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-7 cursor-pointer ">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
