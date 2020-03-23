import React from "react";
import PageTabs from "../components/PageTabs";
import DogForm from "../components/DogForm";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const AddDog = () => {
  const history = useHistory();

  function handleSubmit(dog) {
    //Create Dog in database
    fetch("http://localhost:9000/dog", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dog)
    }).then(() => {
      history.push("/");
    });
  }
  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Add Dog
      </Typography>
      <DogForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddDog;
