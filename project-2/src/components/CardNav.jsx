/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CardNav = ({ cardId, maxCard, navMethods }) => {
  const { goPreviousCard, goNextCard } = navMethods;
  return (
    <div className="Card-Nav">
      <button className={`prev-card ${cardId === 0 ? "first-card" : ""}`} onClick={goPreviousCard}>
        ⭠
      </button>
      <span id="card-number">{cardId + 1}</span>
      <button className={`next-card ${cardId === maxCard - 1 ? "last-card" : ""}`} onClick={goNextCard}>
        ⭢
      </button>
    </div>
  );
};

export default CardNav;
