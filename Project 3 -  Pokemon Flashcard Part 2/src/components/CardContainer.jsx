/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import CardGuessing from "./CardGuessing";
import CardNav from "./CardNav";
import GuessResult from "./GuessResult";

const CardContainer = ({ cardProps, guessResultProps, cardGuessingProps, cardNavProps }) => {
  const { isFront, cardInfo, flipCard } = cardProps;
  const { guessResultDisplay } = guessResultProps;
  const { guess, answer, handleGuessChange, checkGuessAnswer } = cardGuessingProps;
  const { cardId, maxCard, cardNavMethods } = cardNavProps;

  return (
    <div className="Card-Container">
      <Card isFront={isFront} cardInfo={cardInfo} flipCard={flipCard}></Card>
      <GuessResult guessResultDisplay={guessResultDisplay}></GuessResult>
      <CardGuessing
        guess={guess}
        answer={answer}
        handleGuessChange={handleGuessChange}
        checkGuessAnswer={checkGuessAnswer}
      ></CardGuessing>
      <CardNav cardId={cardId} maxCard={maxCard} cardNavMethods={cardNavMethods}></CardNav>
    </div>
  );
};

export default CardContainer;
