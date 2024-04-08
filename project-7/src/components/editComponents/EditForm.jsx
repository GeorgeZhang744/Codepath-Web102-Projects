/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import FormMiniContainer from "../FormMiniContainer";
import ColorOptions from "../ColorOptions";
import { supabase } from "../../client";

const EditForm = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const speedChangeHandler = (e) => {
    setSpeed(e.target.value);
  };

  const colorChangeHandler = (e) => {
    setColor(e.target.value);
  };

  const updateCrewmate = async () => {
    await supabase.from("Crewmates").update({ name, speed, color }).eq("id", id);
    alert("Crewmate updated!");
    window.location = "/gallery";
  };

  const deleteCrewmate = async () => {
    await supabase.from("Crewmates").delete().eq("id", id);
    alert("Crewmate deleted!");
    window.location = "/gallery";
  };

  return (
    <>
      <form className="form-container">
        <FormMiniContainer
          labelName={"Name:"}
          inputName={"name"}
          placeholderValue={"Enter crewmate's name"}
          inputValue={name}
          inputChangeHandler={nameChangeHandler}
        ></FormMiniContainer>
        <FormMiniContainer
          labelName={"Speed (mph):"}
          inputName={"speed"}
          placeholderValue={"Enter speed in mph"}
          inputValue={speed}
          inputChangeHandler={speedChangeHandler}
        ></FormMiniContainer>
        <ColorOptions color={color} colorChangeHandler={colorChangeHandler}></ColorOptions>
      </form>
      <button onClick={updateCrewmate}>Update Crewmate</button>
      <button onClick={deleteCrewmate}>Delete Crewmate</button>
    </>
  );
};

export default EditForm;
