/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EditForm from "../components/editComponents/EditForm";
import { supabase } from "../client";

const EditCrewmateDetailPage = () => {
  const { id } = useParams();

  const [crewmate, setCrewmate] = useState("");

  useEffect(() => {
    const getCrewmate = async () => {
      const result = await supabase.from("Crewmates").select("*").eq("id", id).single();
      setCrewmate(result.data);
    };

    getCrewmate();
  }, [id]);

  return (
    <div className="edit-page">
      <h1>{`Update Your Crewmate :)`}</h1>
      <img src="../src/assets/crewmates.43d07b24.png" height="200px" width="auto" />
      <br />
      <h2>Current Crewmate Info:</h2>
      <h3>
        Name: {crewmate.name}, Speed: {crewmate.speed}, Color: {crewmate.color}
      </h3>
      <EditForm />
    </div>
  );
};

export default EditCrewmateDetailPage;
