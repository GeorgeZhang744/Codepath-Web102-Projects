/* eslint-disable no-unused-vars */
import React from "react";
import BooksContainer from "./BooksContainer";
import DataVisualization from "./DataVisualization";

const BooksDataWrapper = () => {
  return (
    <div className="search-result-wrapper">
      <div className="books-section">
        <h2>Books</h2>
        <BooksContainer />
      </div>
      <div className="visualization-section">
        <h2>Data Visualization</h2>
        <DataVisualization />
      </div>
    </div>
  );
};

export default BooksDataWrapper;
