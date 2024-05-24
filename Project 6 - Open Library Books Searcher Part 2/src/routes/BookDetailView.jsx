/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BookDetailView = () => {
  const { author, bookIdx } = useParams();

  const [bookDetail, setBookDetail] = useState("");
  const [iaLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetail = async () => {
      const url = new URL("https://openlibrary.org/search.json");
      url.searchParams.append("author", author);

      const response = await fetch(url.href);
      if (!response.ok) {
        throw new Error("Failed to fetch books by author");
      }
      const data = await response.json();
      const docs = await data.docs;

      setIsLoading(false);
      setBookDetail(docs[bookIdx]);
    };

    fetchBookDetail();
  }, [author, bookIdx]);

  const safeListRender = (attributeName) => {
    const bookAttribute = bookDetail[attributeName]
    if (bookAttribute) {
      return (
        <ul>
          {(bookAttribute.map((attrValue, i) => (<li key={i}>{attrValue}</li>)))}
        </ul>
      )
    } else {
      return (<div>{`No ${attributeName} found`}</div>)
    }
  }

  return (
    <div className="Book-Detail-View">
      {iaLoading ? (
        <div className="loading-msg">Loading...</div>
      ) : (
        <div className="book-details">
          <h3>
            Title: <span>{bookDetail.title}</span>
          </h3>
          <h3>
            Publish year: <span>{bookDetail.first_publish_year}</span>
          </h3>
          <h3>
            Average rating: <span>{bookDetail.ratings_average ? bookDetail.ratings_average : "No rating found"}</span>
          </h3>
          <h3>E-book access: {bookDetail.ebook_access.replace(/_/g, " ")}</h3>
          <h3>Publisher:</h3>
          {safeListRender("publisher")}
          <h3>Subjects:</h3>
          {safeListRender("subject")}
          <Link to="/">
            <button className="book-detail-btn back-btn">Back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BookDetailView;
