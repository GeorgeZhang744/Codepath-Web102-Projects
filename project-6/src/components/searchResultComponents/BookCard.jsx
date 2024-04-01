/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book, author }) => {
  return (
    <div className="Book-Card">
      <div className="card-content">
        <h4 className="book-name">{book.title}</h4>
        <h5 className="book-publish-year">{`Publish year: ${book.first_publish_year}`}</h5>
        <h5 className="book-rating">{book.ratings_average ? `Rating: ${book.ratings_average}` : "No rating found"}</h5>
        {book.cover_i ? (
          <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`} alt="" className="book-cover" />
        ) : (
          <h5 className="book-cover-not-found">No book cover found</h5>
        )}
      </div>
      <div className="btn-container">
        <Link to={`/bookDetails/${author}/${book.idx}`}>
          <button className="book-detail-btn">More Details</button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;