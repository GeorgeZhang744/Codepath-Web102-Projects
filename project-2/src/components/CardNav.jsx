/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CardNav = ({ cardId, maxCard, nextCard }) => {
  return (
    <div className="Card-Nav">
      <button onClick={nextCard}>⭢</button>
    </div>
  );
};

export default CardNav;
