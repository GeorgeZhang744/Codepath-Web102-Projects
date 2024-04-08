/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const CrewmateCard = (props) => {
  const { id, name, speed, color } = props;

  return (
    <div className="crewmate-card" id={props.color}>
      <Link to={`/${id}`}>
        <img className="single-crewmate" src="src/assets/crewmate.ce385016.png" height="150px" width="auto" />
        <h3>
          Name of Crewmate: <span>{name}</span>
        </h3>
        <h3>
          Speed of Crewmate: <span>{speed} mph</span>
        </h3>
        <h3>
          Color of Crewmate: <span>{color}</span>
        </h3>
      </Link>
      <Link to={`/${id}/edit`}>
        <button>Edit Crewmate</button>
      </Link>
    </div>
  );
};

export default CrewmateCard;
