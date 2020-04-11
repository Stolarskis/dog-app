import React, { useState } from "react";
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
import DogNotFound from "../../public/dognotfound.png";
import Divider from "@material-ui/core/Divider";
import DogTable from "./DogTable";
import DogMenu from "./DogMenu";

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
  const [dogState, setDogState] = useState(dogInfo);
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function getVaccinationRecord() {
    const result = await fetch(
      `http://localhost:9000/dog/${dogState.id}/vaccRecord`,
      {
        mode: "cors",
      }
    );
    const vaccRecord = await result.json();
    const newDogState = await { ...dogState, ...vaccRecord.body };
    setDogState(newDogState);
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        action={<DogMenu dogInfo={dogInfo} deleteDog={deleteDog} />}
        title={dogState.name}
        subheader={dogState.owner}
      />
      <CardMedia
        className={classes.media}
        image={DogNotFound}
        title="Dog Picture"
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {dogState.breed}
        </Typography>
        <Divider />
        <Typography variant="body1" color="textPrimary" component="p">
          {dogState.sex}
        </Typography>
        <Divider />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={async () => {
            await getVaccinationRecord();
            handleExpandClick();
          }}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <DogTable dogInfo={dogState} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Dog;
