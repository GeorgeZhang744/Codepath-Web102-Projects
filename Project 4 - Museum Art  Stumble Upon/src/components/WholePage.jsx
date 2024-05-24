/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const WholePage = ({ displayAttr, isDiscovered, discoverHandler, banAttrHandler }) => {
  return (
    <div className="WholePage">
      <h1> Trippin' on Arts </h1>
      <h3> Discover Harvard Art Museums! </h3>
      <div className="discover-container">
        {isDiscovered && (
          <div className="listing-container">
            <h2>{displayAttr.title}</h2>
            <div className="buttons">
              <button
                type="attribute"
                className="attribute-buttons"
                onClick={() => banAttrHandler("people", displayAttr.artistName)}
              >
                {displayAttr.artistName}
              </button>
              <button
                type="attribute"
                className="attribute-buttons"
                onClick={() => banAttrHandler("culture", displayAttr.culture)}
              >
                {displayAttr.culture}
              </button>
              <button type="attribute" className="attribute-buttons" onClick={() => banAttrHandler("dated", displayAttr.dated)}>
                {displayAttr.dated}
              </button>
              <br />
              <br />
            </div>
            <img src={displayAttr.imgUrl} height={"300px"} width={"300px"} />
          </div>
        )}
        <br />
        <button type="discover" className="discover-btn" onClick={discoverHandler}>
          🔀 Discover!
        </button>
      </div>
    </div>
  );
};

export default WholePage;
