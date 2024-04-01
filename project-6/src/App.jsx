import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import debounce from "lodash/debounce";
import "./App.css";
import Layout from "./routes/Layout";
import BookDetailView from "./routes/BookDetailView";
import NotFound from "./routes/NotFound";
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
  const [booksCountPerYear, setBooksCountPerYear] = useState([])

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
        const booksCount = {};

        const docs = await data.docs;
        const docsWithIdx = docs.map((doc, i) => {
          doc["idx"] = i;
          return doc;
        })

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
            // if (!NaN(publishYear)) {
              
            // }
            if (booksCount[publishYear]) {
              booksCount[publishYear]++;
            } else {
              if (!Number.isNaN(publishYear)){
                booksCount[publishYear] = 1;
              }
            }
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

        const booksCountData = Object.keys(booksCount).map((year) => ({year: year, count: booksCount[year]}))

        setIsLoading(false);

        setBooksCount(totalBooksCount);
        setBooksCountPerYear(booksCountData);
        setYearRange(`${earliestYear} - ${latestYear}`);
        if (ratingCount > 0) {
          setAvgRating(rating / ratingCount);
        } else {
          setAvgRating("None");
        }
        setBooks(docsWithIdx);
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

  const searchBarProps = { author, authorChangeHandler };
  const filtersProps = {
    filtersValues: { yearFilterCheck, yearFilterLowerBound, yearFilterUpperBound, ratingFilterCheck, ratingFilterValue },
    filtersHandlers: {
      yearFilterCheckChangeHandler,
      yearFilterLowerBoundChangeHandler,
      yearFilterUpperBoundChangeHandler,
      ratingFilterCheckChangeHandler,
      ratingFilterValueChangeHandler,
      applyFilterHandler,
    },
  };
  const searchResultProps = {
    booksContainerValues: { isLoading, books, filters, author },
    bookStatisticsValues: { booksCount, yearRange, avgRating },
    dataVisualizationValues: { booksCountPerYear }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout searchBarProps={searchBarProps} filtersProps={filtersProps} />}>
          <Route index={true} element={<SearchResult searchResultProps={searchResultProps}></SearchResult>}></Route>
          <Route path='bookDetails/:author/:bookIdx' element={<BookDetailView></BookDetailView>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </div>
    // <div className="App">
    //   <h2>Search Books by Author!</h2>
    //   <SearchBar author={author} authorChangeHandler={authorChangeHandler}></SearchBar>
    //   <Filters
    //     filtersValues={{ yearFilterCheck, yearFilterLowerBound, yearFilterUpperBound, ratingFilterCheck, ratingFilterValue }}
    //     filtersHandlers={{
    //       yearFilterCheckChangeHandler,
    //       yearFilterLowerBoundChangeHandler,
    //       yearFilterUpperBoundChangeHandler,
    //       ratingFilterCheckChangeHandler,
    //       ratingFilterValueChangeHandler,
    //       applyFilterHandler,
    //     }}
    //   ></Filters>
    //   <SearchResult
    //     bsValues={{ booksCount, yearRange, avgRating }}
    //     // filtersValues={{ yearFilterCheck, yearFilterLowerBound, yearFilterUpperBound, ratingFilterCheck, ratingFilterValue }}
    //     // filtersHandlers={{
    //     //   yearFilterCheckChangeHandler,
    //     //   yearFilterLowerBoundChangeHandler,
    //     //   yearFilterUpperBoundChangeHandler,
    //     //   ratingFilterCheckChangeHandler,
    //     //   ratingFilterValueChangeHandler,
    //     //   applyFilterHandler,
    //     // }}
    //     bcValues={{ isLoading, books, filters }}
    //   ></SearchResult>
    // </div>
  );
}

export default App;
