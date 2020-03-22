import React, { useState, useEffect } from "react";
import Dog from "../components/Dog";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const Dogs = props => {
  const [dogs, setDogs] = useState([]);
  const classes = useStyles();
  const spacing = 2;

  function deleteDog(id) {
    //Delete dog from database
    fetch(`http://localhost:9000/dog/${id}`, {
      method: "DELETE",
      mode: "cors"
    }).then(() => {
      //then update state
      fetch("http://localhost:9000/dog/all", { mode: "cors" })
        .then(res => res.json())
        .then(res => {
          setDogs(res.body);
        });
    });
  }

  useEffect(() => {
    fetch("http://localhost:9000/dog/all", { mode: "cors" })
      .then(res => res.json())
      .then(res => {
        setDogs(res.body);
      });
  }, []);

  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {dogs.map(dog => (
              <Grid key={dog.id} item>
                <Dog key={dog.id} dogInfo={dog} deleteDog={deleteDog} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dogs;
