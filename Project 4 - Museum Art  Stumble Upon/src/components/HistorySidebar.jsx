/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const HistorySidebar = ({ listOfSeenArts, imgUrl }) => {
  return (
    <div className="HistorySidebar">
      <div>
        <h2>Who have we seen so far?</h2>
        <div className="history-container">
          {listOfSeenArts.map((art, i) => (
            <li key={i}>
              <img src={art.imgUrl} height={"70px"} width={"70px"} />
              <p>{art.description}</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistorySidebar;
