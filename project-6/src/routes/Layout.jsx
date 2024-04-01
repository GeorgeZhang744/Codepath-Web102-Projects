/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import { Outlet } from "react-router-dom";

const Layout = ({ searchBarProps, filtersProps, searchResultProps}) => {
  const { author, authorChangeHandler } = searchBarProps;

  // const { yearFilterCheck, yearFilterLowerBound, yearFilterUpperBound, ratingFilterCheck, ratingFilterValue } = filtersValues;
  // const {
  //   yearFilterCheckChangeHandler,
  //   yearFilterLowerBoundChangeHandler,
  //   yearFilterUpperBoundChangeHandler,
  //   ratingFilterCheckChangeHandler,
  //   ratingFilterValueChangeHandler,
  //   applyFilterHandler,
  // } = filtersHandlers;

  return (
    <>
      <h2>Search Books by Author!</h2>
      <SearchBar author={author} authorChangeHandler={authorChangeHandler}></SearchBar>
      <Filters {...filtersProps}></Filters>
      <Outlet />
      {/* <SearchResult {...searchResultProps}></SearchResult> */}
    </>
  );
};

export default Layout;
