import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import PublishIcon from "@material-ui/icons/Publish";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { indigo } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 200,
    width: 200,
    elevation: 0,
    backgroundColor: "#3f51b511",
  },

  dimmedBorder: {
    border: "4px dashed #3f51b5aa",
  },

  borderHighlight: {
    border: "4px dashed #3f51b5ff",
  },

  icon: {
    fontSize: 75,
    display: "block",
    margin: "auto",
    paddingTop: 40,
  },

  iconDimmed: {
    color: indigo[200],
  },
  iconHighlight: {
    color: indigo[500],
  },

  checkIcon: {
    paddingTop: 0,
  },
  uploadText: {
    textAlign: "center",
  },
}));

function DogImageUpload({ addDogProfile, removeDogProfile }) {
  const [fileUploaded, setFileUploaded] = useState(false);
  const classes = useStyles();

  const onDrop = useCallback((acceptedFiles) => {
    setFileUploaded(true);
    addDogProfile(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const renderUploadBox = () => {
    if (fileUploaded) {
      return (
        <Paper className={`${classes.paper} ${classes.borderHighlight}`}>
          <Typography className={classes.uploadText}>
            All Set! <br />
            Click Submit to save changes
          </Typography>
          <CheckCircleIcon
            className={`${classes.icon} ${classes.iconHighlight} ${classes.checkIcon}`}
          />
        </Paper>
      );
    } else {
      if (isDragActive) {
        return (
          <Paper className={`${classes.paper} ${classes.borderHighlight}`}>
            <Typography className={classes.uploadText}>
              Upload Dog Profile
            </Typography>
            <PublishIcon
              className={`${classes.icon} ${classes.iconHighlight}`}
            />{" "}
          </Paper>
        );
      } else {
        return (
          <Paper className={`${classes.paper} ${classes.dimmedBorder}`}>
            <Typography className={classes.uploadText}>
              Upload Dog Profile
            </Typography>
            <PublishIcon className={`${classes.icon} ${classes.iconDimmed}`} />{" "}
          </Paper>
        );
      }
    }
  };

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {renderUploadBox()}
      </div>
      <div>
        <Button
          onClick={() => {
            setFileUploaded(false);
            removeDogProfile();
          }}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Reset file
        </Button>
      </div>
    </div>
  );
}

export default DogImageUpload;
