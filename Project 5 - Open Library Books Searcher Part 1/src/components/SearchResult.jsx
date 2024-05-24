/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import BookStatistics from "./searchResultComponents/BookStatistics";
import Filters from "./searchResultComponents/Filters";
import BooksContainer from "./searchResultComponents/BooksContainer";

const SearchResult = ({bsValues, filtersValues, filtersHandlers, bcValues}) => {
  return (
    <div className="Search-Result">
      <BookStatistics bsValues={bsValues}></BookStatistics>
      <Filters filtersValues={filtersValues} filtersHandlers={filtersHandlers}></Filters>
      <BooksContainer bcValues={bcValues}></BooksContainer>
    </div>
  );
}

export default SearchResult