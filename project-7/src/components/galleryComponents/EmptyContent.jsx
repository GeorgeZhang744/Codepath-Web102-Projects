/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const EmptyContent = () => {
  return (
    <div className="empty-container">
      <h2>{`You haven't made a crewmate yet!`}</h2>
      <br />
      <Link to='/create'>
        <button>Create one here!</button>
      </Link>
    </div>
  );
};

export default EmptyContent;
