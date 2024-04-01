/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Label, Tooltip, Legend } from "recharts";

const Histogram = ({ booksCountPerYear }) => {
  const data = booksCountPerYear;
  return booksCountPerYear.length > 0 ? (
    <BarChart width={350} height={350} data={data} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
      <CartesianGrid></CartesianGrid>
      <XAxis dataKey="year" type="category">
        <Label value="Years" position="bottom" />
      </XAxis>
      <YAxis>
        <Label value="Books count" position="outside" angle={-90} />
      </YAxis>
      {/* <Tooltip></Tooltip> */}
      {/* <Legend></Legend> */}
      <Bar dataKey="count" fill="#8884d8"></Bar>
    </BarChart>
  ) : (
    <></>
  );
};

export default Histogram;
