/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const DiningInfo = ({ name, webLink }) => {
  return (
    <div className="Dining-Info">
      <h2>{name}</h2>
      <a href={webLink}>
        <button>INFO</button>
      </a>
    </div>
  );
};

export default DiningInfo;
