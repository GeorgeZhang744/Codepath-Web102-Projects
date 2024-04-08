/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const FormMiniContainer = (props) => {
  const { labelName, inputName, placeholderValue, inputValue, inputChangeHandler } = props;

  return (
    <div className="mini-container">
      <label>
        <h3>{labelName}</h3>
      </label>
      <input type="text" name={inputName} placeholder={placeholderValue} value={inputValue} onChange={inputChangeHandler} />
    </div>
  );
};

export default FormMiniContainer;
