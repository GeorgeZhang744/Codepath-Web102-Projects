/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import { Outlet } from "react-router-dom";

const Layout = ({ searchBarProps, filtersProps, searchResultProps}) => {
  const { author, authorChangeHandler } = searchBarProps;

  return (
    <>
      <h2>Search Books by Author!</h2>
      <SearchBar author={author} authorChangeHandler={authorChangeHandler}></SearchBar>
      <Filters {...filtersProps}></Filters>
      <Outlet />
    </>
  );
};

export default Layout;
