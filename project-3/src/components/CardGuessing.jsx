/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CardGuessing = ({ guess, answer, handleGuessChange, checkGuessAnswer }) => {
  return (
    <div className="Card-Guessing">
      <span>Guess the answer here:</span>
      <input type="text" name="answer" value={guess} onChange={handleGuessChange} placeholder="Place your answer here..." />
      <button className="submit-btn" onClick={() => checkGuessAnswer(answer)}>
        Submit Guess
      </button>
    </div>
  );
};

export default CardGuessing;
