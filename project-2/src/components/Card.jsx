/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Card = ({ isFront, cardInfo, flipCard }) => {
  const { cardImgFront, cardImgBack, cardTextFront, cardTextBack, difficulty } = cardInfo;
  return (
    <div className={`Card ${difficulty} ${isFront ? "" : "flipped"}`} onClick={flipCard}>
      <div className="front">
        <div className="card-img">
          <img src={cardImgFront} alt="" />
        </div>
        <div className="card-text">{cardTextFront}</div>
      </div>
      <div className="back">
        <div className="card-img">
          <img src={cardImgBack} alt="" />
        </div>
        <div className="card-text">{cardTextBack}</div>
      </div>
    </div>
  );
};

export default Card;