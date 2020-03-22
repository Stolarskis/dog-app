import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 250
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 25
  },
  pos: {
    marginBottom: 12
  }
});

const Dog = ({ dogInfo, deleteDog }) => {
  const classes = useStyles();

  /**
  function updateDog() {
    fetch(`http://localhost:9000/dog/${dogInfo.id}`, {
      method: "PUT",
      mode: "cors",
       headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    });
  }
  */

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} align="center">
          {dogInfo.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {dogInfo.breed}
        </Typography>
        <Typography variant="body2" component="p">
          {dogInfo.owner}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">EDIT</Button>
        <Button variant="contained">GET INFO</Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            deleteDog(dogInfo.id);
          }}
        >
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
};

export default Dog;
