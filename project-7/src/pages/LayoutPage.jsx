/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <div className="sidenav">
        <Link className="sidenav-link" to="/">Home</Link>
        <Link className="sidenav-link" to="/create">Create a Crewmate!</Link>
        <Link className="sidenav-link" to="/gallery">Crewmate Gallery</Link>
        <img
          className="single-crewmate"
          src="src/assets/peeking.7c0ab599.png"
          height="150px"
          width="auto"
          style={{ position: "absolute", bottom: "10px" }}
        />
      </div>
      <div className="whole-page">
        <Outlet />
      </div>
    </>
  );
};

export default LayoutPage;
