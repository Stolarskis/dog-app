import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function PageTabs({ tabNumber }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Dog App Tabs">
          <Tab
            label="Home"
            key="HomeTab"
            onClick={() => {
              history.push("/");
            }}
          />
          <Tab
            label="Add Dog"
            key="AddDogTab"
            onClick={() => {
              history.push("/addDog");
            }}
          ></Tab>
        </Tabs>
      </AppBar>
    </div>
  );
}
