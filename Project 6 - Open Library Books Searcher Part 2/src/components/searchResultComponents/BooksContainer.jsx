/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import BookCard from "./BookCard";

const BooksContainer = ({ booksContainerValues }) => {
  const { isLoading, books, filters, author } = booksContainerValues;
  return (
    <div className="Books-Container">
      {isLoading ? (
        <div className="loading-msg">Loading...</div>
      ) : (
        books
          .filter((book) => filters.every((filter) => filter(book)))
          .map((filteredBook, i) => (
            <BookCard book={filteredBook} author={author} key={i}></BookCard>
          ))
      )}
    </div>
  );
};

export default BooksContainer;
