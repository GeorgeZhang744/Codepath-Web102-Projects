/* eslint-disable no-unused-vars */
import React from "react";
import CreateForm from "../components/createComponents/CreateForm";

const CreatePage = () => {
  return (
    <div className="create-page">
      <h1>Create a New Crewmate</h1>
      <img src="src/assets/crewmates.43d07b24.png" height="100px" width="auto" />
      <br />
      <CreateForm />
    </div>
  );
};

export default CreatePage;
