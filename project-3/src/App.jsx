/* eslint-disable no-unused-vars */
import "./App.css";
import CardContainer from "./components/CardContainer";
import { ALL_CARDS } from "./allCards";
import { useCardState } from "./states";

function App() {
  const {
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
  } = useCardState();

  return (
    <div className="App">
      <h1>The Ultimate Pokemon Trainer!</h1>
      <h2>How familiar are you about Pokemon typing? Test all of your Pokemon typing knowledge here!</h2>
      <h3>Number of Cards: {ALL_CARDS.length}</h3>
      <h3>
        Current Streak: {currStreak}, Longest Streak: {longestStreak}
      </h3>
      <CardContainer
        cardProps={{ isFront, cardInfo: allCards[cardId], flipCard }}
        guessResultProps={{ guessResultDisplay }}
        cardGuessingProps={{ guess, answer: allCards[cardId].cardTextBack, handleGuessChange, checkGuessAnswer }}
        cardNavProps={{
          cardId,
          maxCard: ALL_CARDS.length,
          cardNavMethods: { prevCard, nextCard },
        }}
      ></CardContainer>
      <button id="shuffle-btn" onClick={() => shuffleCards(ALL_CARDS)}>
        Shuffle Cards
      </button>
    </div>
  );
}

export default App;
