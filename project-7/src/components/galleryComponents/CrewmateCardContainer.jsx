/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import CrewmateCard from "./CrewmateCard";
import EmptyContent from "./EmptyContent";
import { supabase } from "../../client";

const CrewmateCardContainer = (props) => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const getCrewmates = async () => {
      const result = await supabase.from("Crewmates").select();
      setCrewmates(result.data);
    };

    getCrewmates();
  }, []);

  return (
    <div className="crewmate-container">
      {crewmates.length > 0 ? (
        crewmates.map((crewmate, i) => {
          const { id, name, speed, color } = crewmate;
          return <CrewmateCard key={i} id={id} name={name} speed={speed} color={color}></CrewmateCard>;
        })
      ) : (
        <EmptyContent />
      )}
    </div>
  );
};

export default CrewmateCardContainer;
