/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const GuessResult = ({ guessResultDisplay }) => {
  return (
    <div className={`GuessResult ${guessResultDisplay}`}>
      {guessResultDisplay === "correct-guess"
        ? "That is correct!"
        : guessResultDisplay === "wrong-guess"
        ? "You got it wrong. Click the card to see answer!"
        : ""}
    </div>
  );
};

export default GuessResult;
