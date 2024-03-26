/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

const BookStatistics = ({bsValues}) => {
  const {booksCount, yearRange, avgRating} = bsValues;

  return (
    <div className="Book-Statistics">
      <div className="total-books-count stats-card">
        <h4>Total Books Found:</h4>
        <p>{booksCount}</p>
      </div>
      <div className="publish-year-range stats-card">
        <h4>Year Range of the Books:</h4>
        <p>{yearRange}</p>
      </div>
      <div className="average-rating stats-card">
        <h4>Average Rating of the Books:</h4>
        <p>{avgRating}</p>
      </div>
    </div>
  );
}

export default BookStatistics;