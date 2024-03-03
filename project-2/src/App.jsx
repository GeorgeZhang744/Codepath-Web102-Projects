/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";
import CardContainer from "./components/CardContainer";
import { ALL_CARDS } from "./allCards";

function App() {
  const [isFront, setIsFront] = useState(true);
  const [cardId, setCardId] = useState(0);

  const flipCard = () => {
    setIsFront(!isFront);
  };

  const nextCard = () => {
    if (!isFront) {
      flipCard();
    }
    setCardId(Math.floor(Math.random() * ALL_CARDS.length));
  };

  return (
    <div className="App">
      <h1>The Ultimate Pokemon Trainer!</h1>
      <h2>How familiar are you about Pokemon typing? Test all of your Pokemon typing knowledge here!</h2>
      <h3>Number of Cards: {ALL_CARDS.length}</h3>
      <CardContainer
        cardProps={{ isFront, cardInfo: ALL_CARDS[cardId], flipCard }}
        cardNavProps={{ cardId, maxCard: ALL_CARDS.length, nextCard }}
      ></CardContainer>
    </div>
  );
}

export default App;
