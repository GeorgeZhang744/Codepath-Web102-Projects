/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

const BooksContainer = ({bcValues}) => {
  const {isLoading, books, filters} = bcValues;
  return (
    <div className="Books-Container">
      {isLoading ? (
        <div className="loading-msg">Loading...</div>
      ) : (
        books
          .filter((book) => filters.every((filter) => filter(book)))
          .map((filteredBook, i) => (
            <div className="book-card" key={i}>
              <h4 className="book-name">{filteredBook.title}</h4>
              <h5 className="book-publish-year">{`Publish year: ${filteredBook.first_publish_year}`}</h5>
              <h5 className="book-rating">
                {filteredBook.ratings_average ? `Rating: ${filteredBook.ratings_average}` : "No rating found"}
              </h5>
              {filteredBook.cover_i ? (
                <img src={`https://covers.openlibrary.org/b/id/${filteredBook.cover_i}.jpg`} alt="" className="book-cover" />
              ) : (
                <h5 className="book-cover-not-found">No book cover found</h5>
              )}
            </div>
          ))
      )}
    </div>
  );
};

export default BooksContainer;
