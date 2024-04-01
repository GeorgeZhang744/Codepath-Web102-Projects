/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Histogram from "./Hitogram";

const DataVisualization = ({ dataVisualizationValues }) => {
  const { booksCountPerYear } = dataVisualizationValues;
  return booksCountPerYear.length > 0 ? (
    <div className="Data-Visualization">
      <Histogram booksCountPerYear={booksCountPerYear}></Histogram>
    </div>
  ) : (
    <></>
  );
};

export default DataVisualization;
