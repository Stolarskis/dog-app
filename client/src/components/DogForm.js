import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },

  radioButtons: {
    marginLeft: "20px"
  },
  submitButton: {
    marginLeft: "10px",
    marginTop: "10px"
  }
}));

const DogForm = ({ handleSubmit }) => {
  const [dog, setDog] = useState({
    name: "",
    breed: "",
    sex: "",
    fixed: false,
    weight: "",
    owner: ""
  });
  const classes = useStyles();

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
      case "owner":
        newDog["owner"] = event.target.value;
        setDog(newDog);
        break;
    }
  }

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            onChange={handleChange}
          />
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
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <TextField
            name="breed"
            label="Breed"
            variant="outlined"
            onChange={handleChange}
          />

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
        </div>
        <div>
          <TextField
            name="weight"
            label="Weight"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            name="owner"
            label="Owner Name"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
      </form>

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
    </div>
  );
};

export default DogForm;
