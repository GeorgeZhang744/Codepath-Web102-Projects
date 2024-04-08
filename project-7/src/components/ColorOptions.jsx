/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ColorOptions = (props) => {
  const colors = ["Red", "Green", "Blue", "Purple", "Yellow", "Orange", "Pink", "Rainbow"];
  
  const { color, colorChangeHandler } = props;

  return (
    <div className="mini-container">
      <label>
        <h3>Color:</h3>
      </label>
      {colors.map((option) => (
        <li key={option}>
          <input name="color" type="radio" value={option} checked={color === option} onChange={colorChangeHandler} />
          {option}
        </li>
      ))}
    </div>
  );
};

export default ColorOptions;
