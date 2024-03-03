/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import CardNav from "./CardNav";

const CardContainer = ({ cardProps, cardNavProps }) => {
  const { isFront, cardInfo, flipCard } = cardProps;
  const { cardId, maxCard, nextCard } = cardNavProps;

  return (
    <div className="Card-Container">
      <Card isFront={isFront} cardInfo={cardInfo} flipCard={flipCard}></Card>
      <CardNav cardId={cardId} maxCard={maxCard} nextCard={nextCard}></CardNav>
    </div>
  );
};

export default CardContainer;
