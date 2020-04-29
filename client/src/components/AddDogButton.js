import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const AddDogButton = () => {
  const classes = useStyles();
  return (
    <Tooltip title="Add Dog" aria-label="add" className={classes.fab}>
      <Fab
        color="secondary"
        className={classes.absolute}
        component={NavLink}
        to={"/addDog/"}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default AddDogButton;
