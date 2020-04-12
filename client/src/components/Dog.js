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
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [dog, setDog] = useState(dogInfo);

  async function handleExpandClick() {
    if (!expanded) {
      await getVaccinationRecord();
    }
    setExpanded(!expanded);
  }

  async function getVaccinationRecord() {
    const result = await fetch(
      `http://localhost:9000/dog/${dog.id}/vaccRecord`,
      {
        mode: "cors",
      }
    );
    const vaccRecord = await result.json();
    setDog(await { ...dog, ...vaccRecord.body });
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        action={<DogMenu dogInfo={dog} deleteDog={deleteDog} />}
        title={dog.name}
        subheader={dog.owner}
      />
      <CardMedia
        className={classes.media}
        image={DogNotFound}
        title="Dog Picture"
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {dog.breed}
        </Typography>
        <Divider />
        <Typography variant="body1" color="textPrimary" component="p">
          {dog.sex}
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
          <DogTable dogInfo={dog} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Dog;
