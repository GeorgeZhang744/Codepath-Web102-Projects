/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, useParams } from "react-router-dom";

const CrewmateNotFound = () => {
  const id = useParams();

  return (
    <div className="crewmate-not-found">
      <div>
        <h3>{`Sorry, there isn't a crewmate with this ID!`}</h3>
        <h4>{`Let's go find another one!`}</h4>
        <Link to="../gallery">
          <h3>{`Go to Gallery :)`}</h3>
        </Link>
      </div>
      <br />
      <img src="./src/assets/suspect.bdfacc7e.png" className="single-crewmate" height="150px" width="auto" />
    </div>
  );
};

export default CrewmateNotFound;
