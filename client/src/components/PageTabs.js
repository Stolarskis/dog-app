import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const PageTabs = ({ history }) => {
  const [tabNumber, setTabNumber] = useState(determineInitialRoute);
  const classes = useStyles();

  function determineInitialRoute() {
    if (history.location.pathname === "/addDog/") {
      return 1;
    } else {
      return 0;
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={tabNumber} aria-label="Dog App Tabs">
          <Tab
            label="Home"
            key="HomeTab"
            onClick={() => {
              setTabNumber(0);
            }}
            component={NavLink}
            to={"/"}
          />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default withRouter(PageTabs);
