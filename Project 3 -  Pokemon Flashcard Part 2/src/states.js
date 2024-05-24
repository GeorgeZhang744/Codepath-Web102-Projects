import { useState } from "react";
import { ALL_CARDS } from "./allCards";

export const useCardState = () => {
  const [isFront, setIsFront] = useState(true);
  const [cardId, setCardId] = useState(0);
  const [allCards, setAllCards] = useState(ALL_CARDS);
  const [guess, setGuess] = useState("");
  const [currStreak, setCurrStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [guessResultDisplay, setGuessResultDisplay] = useState("");

  const flipCard = () => {
    setIsFront(!isFront);
  };

  const prevCard = () => {
    if (!isFront) {
      flipCard();
    }
    setCardId(cardId - 1);
    setGuessResultDisplay("");
  };

  const nextCard = () => {
    if (!isFront) {
      flipCard();
    }
    setCardId(cardId + 1);
    setGuessResultDisplay("");
  };

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setCardId(0);
    setAllCards([...array]);
    setGuessResultDisplay("");
  };

  const checkGuessAnswer = (answer) => {
    if (answer.toUpperCase() === guess.toUpperCase()) {
      setCurrStreak(currStreak + 1);
      if (currStreak >= longestStreak) {
        setLongestStreak(longestStreak + 1);
      }
      setGuessResultDisplay("correct-guess");
    } else {
      setGuessResultDisplay("wrong-guess");
      setCurrStreak(0);
    }

    setGuess("");
  };

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  return {
    isFront,
    cardId,
    allCards,
    guess,
    currStreak,
    longestStreak,
    guessResultDisplay,
    flipCard,
    prevCard,
    nextCard,
    shuffleCards,
    checkGuessAnswer,
    handleGuessChange,
  };
};
