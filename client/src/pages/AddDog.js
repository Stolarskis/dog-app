import React from "react";
import DogForm from "../components/DogForm";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const AddDog = () => {
  const history = useHistory();

  async function handleSubmit(dog) {
    //Create Dog in database
    const result = await fetch("http://localhost:9000/dog", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dog),
    });

    const newDog = await result.json();

    //Create blank vaccination record for the created dog.
    const resultVaccRecord = await fetch(
      `http://localhost:9000/dog/${newDog.body.id}/vaccRecord`,
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    //Route back to home page
    history.push("/");

    //Create blank vaccination record for the created dog.
  }
  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Add Dog
      </Typography>
      <DogForm handleSubmit={handleSubmit} dogInfo={{}} />
    </div>
  );
};

export default AddDog;
