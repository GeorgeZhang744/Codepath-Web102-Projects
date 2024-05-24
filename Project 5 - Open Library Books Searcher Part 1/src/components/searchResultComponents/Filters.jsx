/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

const Filters = ({filtersValues, filtersHandlers}) => {
  const { yearFilterCheck, yearFilterLowerBound, yearFilterUpperBound, ratingFilterCheck, ratingFilterValue } = filtersValues;
  const {
    yearFilterCheckChangeHandler,
    yearFilterLowerBoundChangeHandler,
    yearFilterUpperBoundChangeHandler,
    ratingFilterCheckChangeHandler,
    ratingFilterValueChangeHandler,
    applyFilterHandler,
  } = filtersHandlers;

  return (
    <div className="Filters">
      <div className="year-filter">
        <input type="checkbox" checked={yearFilterCheck} onChange={yearFilterCheckChangeHandler} />
        <span>Filter books by year range:</span>
      </div>
      <div className="year-filter-inputs">
        <div className="input-row">
          <label htmlFor="year-lower-bound">Enter the lower bound of the year range:</label>
          <input
            type="number"
            id="year-lower-bound"
            className="filter-input-box"
            value={yearFilterLowerBound}
            onChange={yearFilterLowerBoundChangeHandler}
          />
        </div>
        <div className="input-row">
          <label htmlFor="year-upper-bound">Enter the upper bound of the year range:</label>
          <input
            type="number"
            id="year-upper-bound"
            className="filter-input-box"
            value={yearFilterUpperBound}
            onChange={yearFilterUpperBoundChangeHandler}
          />
        </div>
      </div>
      <div className="rating-filter">
        <input type="checkbox" checked={ratingFilterCheck} onChange={ratingFilterCheckChangeHandler} />
        <span>Filter books by rating:</span>
      </div>
      <div className="rating-filter-inputs">
        <label htmlFor="rating-value">Select the rating:</label>
        <input
          type="range"
          id="rating-value"
          value={ratingFilterValue}
          onChange={ratingFilterValueChangeHandler}
          min="1"
          max="5"
          step="1"
        />
      </div>
      <button className="apply-filter-btn" onClick={applyFilterHandler}>
        Apply Filter
      </button>
    </div>
  );
};

export default Filters;