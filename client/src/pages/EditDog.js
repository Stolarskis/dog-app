import React from "react";
import DogForm from "../components/DogForm";
import { useHistory } from "react-router-dom";

const EditDog = (props) => {
  const history = useHistory();

  const dogId = history.location.pathname.split("/").pop();

  function handleSubmit(dog) {
    fetch(`http://localhost:9000/dog/${dogId}`, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dog),
    }).then(() => {
      history.push("/");
    });
  }

  return (
    <div>
      <h1>Edit Dog</h1>
      <DogForm handleSubmit={handleSubmit} dogInfo={props.location.state} />
    </div>
  );
};

export default EditDog;
