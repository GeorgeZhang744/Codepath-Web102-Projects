import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";

function App() {
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState([]);
  const [booksCount, setBooksCount] = useState(0);
  const [yearRange, setYearRange] = useState("None");
  const [avgRating, setAvgRating] = useState("None");
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState([]);
  const [yearFilterCheck, setYearFilterCheck] = useState(false);
  const [ratingFilterCheck, setRatingFilterCheck] = useState(false);
  const [yearFilterLowerBound, setYearFilterLowerBound] = useState("");
  const [yearFilterUpperBound, setYearFilterUpperBound] = useState("");
  const [ratingFilterValue, setRatingFilterValue] = useState(1);

  useEffect(() => {
    const fetchBooksByAuthor = async (author) => {
      try {
        setIsLoading(true);
        loadingStats();
        setFiltersDefault();

        const url = new URL("https://openlibrary.org/search.json");
        url.searchParams.append("author", author);

        const response = await fetch(url.href);
        if (!response.ok) {
          throw new Error("Failed to fetch books by author");
        }
        const data = await response.json();

        const totalBooksCount = await data.numFound;

        let earliestYear = Number.POSITIVE_INFINITY;
        let latestYear = Number.NEGATIVE_INFINITY;
        let rating = 0;
        let ratingCount = 0;

        const docs = await data.docs;

        url.searchParams.append("page", 0);

        for (let i = 1; i <= Math.ceil(totalBooksCount / 100); i++) {
          url.searchParams.set("page", i);
          const response = await fetch(url.href);
          if (!response.ok) {
            throw new Error("Failed to fetch books by author");
          }
          const data = await response.json();
          const docs = data.docs;

          docs.forEach((doc) => {
            const publishYear = parseInt(doc.first_publish_year);
            const averageRating = doc.ratings_average;
            if (publishYear < earliestYear) {
              earliestYear = publishYear;
            }
            if (publishYear > latestYear) {
              latestYear = publishYear;
            }
            if (averageRating) {
              rating += averageRating;
              ratingCount += 1;
            }
          });
        }

        setIsLoading(false);

        setBooksCount(totalBooksCount);
        setYearRange(`${earliestYear} - ${latestYear}`);
        if (ratingCount > 0) {
          setAvgRating(rating / ratingCount);
        } else {
          setAvgRating("None");
        }
        setBooks(docs);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    const debouncedFetch = debounce(fetchBooksByAuthor, 500);

    if (author) {
      debouncedFetch(author);
    }

    return () => {
      debouncedFetch.cancel();
    };
  }, [author]);

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const yearFilterCheckChangeHandler = (e) => {
    setYearFilterCheck(e.target.checked);
  };

  const ratingFilterCheckChangeHandler = (e) => {
    setRatingFilterCheck(e.target.checked);
  };

  const yearFilterLowerBoundChangeHandler = (e) => {
    setYearFilterLowerBound(e.target.value);
  };

  const yearFilterUpperBoundChangeHandler = (e) => {
    setYearFilterUpperBound(e.target.value);
  };

  const ratingFilterValueChangeHandler = (e) => {
    setRatingFilterValue(parseInt(e.target.value));
  };

  const applyFilterHandler = () => {
    const filter = [];

    if (yearFilterCheck && yearFilterLowerBound && yearFilterUpperBound) {
      filter.push((book) => book.first_publish_year >= yearFilterLowerBound && book.first_publish_year <= yearFilterUpperBound);
    }

    if (ratingFilterCheck) {
      filter.push((book) => Math.floor(book.ratings_average) === ratingFilterValue);
    }

    setFilters(filter);
  };

  const loadingStats = () => {
    setBooksCount("Loading...");
    setYearRange("Loading...");
    setAvgRating("Loading...");
  };

  const setFiltersDefault = () => {
    setYearFilterCheck(false);
    setYearFilterLowerBound("");
    setYearFilterUpperBound("");
    setRatingFilterCheck(false);
    setRatingFilterValue(1);
  };

  return (
    <div className="App">
      <h2>Search Books by Author!</h2>
      <SearchBar author={author} authorChangeHandler={authorChangeHandler}></SearchBar>
      <SearchResult
        bsValues={{ booksCount, yearRange, avgRating }}
        filtersValues={{ yearFilterCheck, yearFilterLowerBound, yearFilterUpperBound, ratingFilterCheck, ratingFilterValue }}
        filtersHandlers={{
          yearFilterCheckChangeHandler,
          yearFilterLowerBoundChangeHandler,
          yearFilterUpperBoundChangeHandler,
          ratingFilterCheckChangeHandler,
          ratingFilterValueChangeHandler,
          applyFilterHandler,
        }}
        bcValues={{ isLoading, books, filters }}
      ></SearchResult>
    </div>
  );
}

export default App;
