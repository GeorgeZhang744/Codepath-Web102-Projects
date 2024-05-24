/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DiningInfo from "./DiningInfo";

const Card = ({ img, name, webLink}) => {
  return (
    <div className="Card">
      <img src={img} alt="" className="card-img" />
      <DiningInfo name={name} webLink={webLink} />
    </div>
  );
};

export default Card;
