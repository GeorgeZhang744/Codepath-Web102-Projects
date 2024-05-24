/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

const SearchBar = ({ author, authorChangeHandler }) => {
  return (
    <div className="Search-Bar">
      <input
        type="text"
        id="author-search-bar"
        value={author}
        onChange={authorChangeHandler}
        placeholder="Enter the name of the author"
      />
    </div>
  );
};

export default SearchBar;
