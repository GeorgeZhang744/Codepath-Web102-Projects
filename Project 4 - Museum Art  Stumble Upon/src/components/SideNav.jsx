/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SideNav = ({ banList, removeBanAttrHandler }) => {
  return (
    <div className="SideNav">
      <h2>Ban List</h2>
      <h4>Select an attribute in your listing to ban it</h4>
      {banList.map((bannedAttr, i) => (
        <button type="button" className="banned-buttons" onClick={() => removeBanAttrHandler(bannedAttr.value)} key={i}>
          {bannedAttr.value}
        </button>
      ))}
    </div>
  );
};

export default SideNav;
