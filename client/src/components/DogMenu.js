import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";

//Renders a menu on top of each dog card to allow the user to edit/delete dogs.
const DogMenu = ({ dogInfo, deleteDog }) => {
  const [position, setPosition] = React.useState(null);

  const handleMenuClick = (event) => {
    setPosition(event.currentTarget);
  };

  const handleMenuClose = () => {
    setPosition(null);
  };

  return (
    <div>
      <IconButton aria-label="settings" onClick={handleMenuClick}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="dog-options-menu"
        anchorEl={position}
        keepMounted
        open={Boolean(position)}
        onClose={handleMenuClose}
      >
        <MenuItem
          component={NavLink}
          to={{
            pathname: `/editDog/${dogInfo.id}`,
            state: dogInfo,
          }}
        >
          Edit Dog
        </MenuItem>
        <MenuItem
          onClick={() => {
            deleteDog(dogInfo.id);
          }}
        >
          Delete Dog
        </MenuItem>
        <MenuItem
          component={NavLink}
          to={{
            pathname: `/setDueDates/${dogInfo.id}`,
          }}
        >
          Vaccination Due Dates
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DogMenu;
