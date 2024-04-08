/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CrewmateNotFound from "./CrewmateNotFound";
import { supabase } from "../../client";

const CrewmateDetail = (props) => {
  const [crewmate, setCrewmate] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getCrewmate = async () => {
      const result = await supabase.from("Crewmates").select("*").eq("id", id).single();
      setCrewmate(result.data);
    };

    getCrewmate();
  }, [id]);

  return (
    <div className="crewmate-detail">
      {crewmate ? (
        <>
          <div>
            <h1>Crewmate: {crewmate.name}</h1>
            <h1>Stats:</h1>
            <h2>Color: {crewmate.color}</h2>
            <h2>Speed: {crewmate.speed} mph</h2>
            <br />
            <h3>
              {crewmate.speed > 10
                ? "Wow, this Crewmate is super fast, that will be helpful! 🏃💨"
                : "You may want to find a Crewmate with more speed, this one is kind of slow 😬"}
            </h3>
            <Link to={`/${id}/edit`}>
              <button>Wanna edit this Crewmate?</button>
            </Link>
          </div>
          <img src="./src/assets/suspect.bdfacc7e.png" className="single-crewmate" height="150px" width="auto" />
        </>
      ) : (
        <CrewmateNotFound />
      )}
    </div>
  );
};

export default CrewmateDetail;
