/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import FormMiniContainer from "../FormMiniContainer";
import ColorOptions from "../ColorOptions";
import { supabase } from "../../client";

const CreateForm = () => {
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

  const createCrewmate = async () => {
    await supabase.from("Crewmates").insert([{ name, speed, color }]);
    alert("Crewmate created!");
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
      <button onClick={createCrewmate}>Create Crewmate</button>
    </>
  );
};

export default CreateForm;
