import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DogImageUpload from "./DogImageUpload";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  row: {
    justify: "flex-start",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const DogForm = ({ handleSubmit, dogInfo }) => {
  const [dog, setDog] = useState({
    name: "name" in dogInfo ? dogInfo.name : "",
    breed: "breed" in dogInfo ? dogInfo.breed : "",
    sex: "sex" in dogInfo ? dogInfo.sex : "female",
    fixed: "fixed" in dogInfo ? dogInfo.fixed : false,
    weight: "weight" in dogInfo ? dogInfo.weight : 0,
    ageYears: "ageYears" in dogInfo ? dogInfo.ageYears : 0,
    owner: "owner" in dogInfo ? dogInfo.owner : "",
    dogProfile: null,
  });
  const classes = useStyles();

  function addDogProfileToState(file) {
    let newDog = Object.assign({}, dog);
    newDog["dogProfile"] = file;
    setDog(newDog);
  }

  function removeDogProfileState() {
    let newDog = Object.assign({}, dog);
    newDog["dogProfile"] = null;
    setDog(newDog);
  }

  function handleChange(event) {
    let newDog = Object.assign({}, dog);
    switch (event.target.name) {
      case "name":
        newDog["name"] = event.target.value;
        setDog(newDog);
        break;
      case "breed":
        newDog["breed"] = event.target.value;
        setDog(newDog);
        break;
      case "sex":
        newDog["sex"] = event.target.value;
        setDog(newDog);
        break;
      case "fixed":
        newDog["fixed"] = event.target.checked;
        setDog(newDog);
        break;
      case "weight":
        newDog["weight"] = event.target.value;
        setDog(newDog);
        break;
      case "ageYears":
        newDog["ageYears"] = event.target.value;
        setDog(newDog);
        break;
      case "owner":
        newDog["owner"] = event.target.value;
        setDog(newDog);
        break;
      default:
        console.error("Field does not exist in dog object");
        break;
    }
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      {/* First Row - Name and Sex Input Fields*/}
      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={2}>
          <Grid key={"nameFieldGrid"} item>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              onChange={handleChange}
              value={dog.name}
            />
          </Grid>

          <Grid key={"sexButtonGroupGrid"} item>
            <FormControl component="fieldset" className={classes.radioButtons}>
              <FormLabel component="legend">Sex</FormLabel>
              <RadioGroup
                aria-label="Sex"
                name="sex"
                value={dog.sex}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={4}>
          <Grid key={"nameFieldGrid"} item>
            <TextField
              name="breed"
              label="Breed"
              variant="outlined"
              onChange={handleChange}
              value={dog.breed}
            />
          </Grid>
          <Grid key={"fixedCheckBoxGrid"} item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={dog.fixed}
                  onChange={handleChange}
                  name="fixed"
                  color="primary"
                  className={classes.radioButtons}
                />
              }
              label="Fixed"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={2}>
          <Grid key={"weightFieldGrid"} item>
            <TextField
              name="weight"
              label="Weight"
              variant="outlined"
              onChange={handleChange}
              value={dog.weight}
            />
          </Grid>
          <Grid key={"DogPictureUpload"} item>
            <DogImageUpload
              addDogProfile={addDogProfileToState}
              removeDogProfile={removeDogProfileState}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={2}>
          <Grid key={"ageFieldGrid"} item>
            <TextField
              name="ageYears"
              label="age in years"
              variant="outlined"
              onChange={handleChange}
              value={dog.ageYears}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={2}>
          <Grid key={"ownerFieldGrid"} item>
            <TextField
              name="owner"
              label="Owner Name"
              variant="outlined"
              onChange={handleChange}
              value={dog.owner}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={2}>
          <Grid key={"submitButtonGrid"} item>
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              onClick={() => {
                handleSubmit(dog);
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DogForm;
