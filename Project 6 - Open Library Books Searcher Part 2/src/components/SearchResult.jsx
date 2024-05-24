/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import BookStatistics from "./searchResultComponents/BookStatistics";
import BooksContainer from "./searchResultComponents/BooksContainer";
import DataVisualization from "./searchResultComponents/DataVisualization";

const SearchResult = ({ searchResultProps }) => {
  const {bookStatisticsValues, booksContainerValues, dataVisualizationValues} = searchResultProps
  return (
    <div className="Search-Result">
      <BookStatistics bookStatisticsValues={bookStatisticsValues}></BookStatistics>
      <div className="books-and-data-container">
        <BooksContainer booksContainerValues={booksContainerValues}></BooksContainer>
        <DataVisualization dataVisualizationValues={dataVisualizationValues}></DataVisualization>
      </div>
    </div>
  );
};

export default SearchResult;
