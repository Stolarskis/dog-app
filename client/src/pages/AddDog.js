import React from "react";
import PageTabs from "../components/PageTabs";
import DogForm from "../components/DogForm";
import Typography from "@material-ui/core/Typography";

const AddDog = () => {
  return (
    <div>
      <PageTabs tabNumber={1} />
      <Typography variant="h4" component="h2" gutterBottom>
        Add Dog
      </Typography>
      <DogForm />
    </div>
  );
};

export default AddDog;
