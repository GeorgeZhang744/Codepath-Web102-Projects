/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CardNav = ({ cardId, maxCard, cardNavMethods }) => {
  const { nextCard, prevCard } = cardNavMethods;
  return (
    <div className="Card-Nav">
      <button id="prev-card" className={cardId === 0 ? "first-card" : ""} onClick={prevCard}>
        ⭠
      </button>
      <span id="card-id">{cardId + 1}</span>
      <button id="next-card" className={cardId === maxCard-1 ? "last-card" : ""} onClick={nextCard}>
        ⭢
      </button>
    </div>
  );
};

export default CardNav;
