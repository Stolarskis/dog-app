import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DogNotFound from "../../public/dognotfound.png";
import Divider from "@material-ui/core/Divider";
import DogTable from "./DogTable";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    maxWidth: 450,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const Dog = ({ dogInfo, deleteDog }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={dogInfo.name}
        subheader={dogInfo.owner}
      />
      <CardMedia
        className={classes.media}
        image={DogNotFound}
        title="Dog Picture"
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
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
      </Menu>
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {dogInfo.breed}
        </Typography>
        <Divider />
        <Typography variant="body1" color="textPrimary" component="p">
          {dogInfo.sex}
        </Typography>
        <Divider />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <DogTable dogInfo={dogInfo} />
        </CardContent>
      </Collapse>
    </Card>
  );

  /**
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} align="center">
          {dogInfo.name}
        </Typography>
        <Divider />
        <br />
        <Typography className={classes.pos} color="textSecondary">
          {dogInfo.breed}
        </Typography>
        <Typography variant="body2" component="p">
          {dogInfo.owner}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          component={NavLink}
          to={{
            pathname: `/editDog/${dogInfo.id}`,
            state: dogInfo
          }}>
          EDIT
        </Button>
        <Button variant="contained" component={NavLink} to={{
          pathname: `/infoDog/${dogInfo.id}`,
          state: dogInfo
        }}>
        GET INFO
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            deleteDog(dogInfo.id);
          }}>
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
  */
};

export default Dog;
