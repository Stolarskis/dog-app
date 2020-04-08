import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

const DogInfo = ({ dogInfo }) => {
  console.log(dogInfo);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{"Dog"}</TableCell>
            <TableCell align="left">Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={"Name"}>
            <TableCell align="left">{"Name"}</TableCell>
            <TableCell align="left">{dogInfo.name}</TableCell>
          </TableRow>
          <TableRow key={"Breed"}>
            <TableCell align="left">{"Breed"}</TableCell>
            <TableCell align="left">{dogInfo.breed}</TableCell>
          </TableRow>
          <TableRow key={"Sex"}>
            <TableCell align="left">{"Sex"}</TableCell>
            <TableCell align="left">{dogInfo.sex}</TableCell>
          </TableRow>
          <TableRow key={"Owner"}>
            <TableCell align="left">{"Owner"}</TableCell>
            <TableCell align="left">{dogInfo.owner}</TableCell>
          </TableRow>
          <TableRow key={"Fixed"}>
            <TableCell align="left">{"Fixed"}</TableCell>
            <TableCell align="left">{dogInfo.fixed ? "Yes" : "No"}</TableCell>
          </TableRow>
          <TableRow key={"Weight"}>
            <TableCell align="left">{"Weight"}</TableCell>
            <TableCell align="left">{dogInfo.weight}</TableCell>
          </TableRow>
          <TableRow key={"Age"}>
            <TableCell align="left">{"Age"}</TableCell>
            <TableCell align="left">{dogInfo.ageYears}</TableCell>
          </TableRow>
          <TableRow key={"Rabies Due Date"}>
            <TableCell align="left">{"Rabies Due Date"}</TableCell>
            <TableCell align="left">{dogInfo.rabiesDueDate}</TableCell>
          </TableRow>
          <TableRow key={"Heartworm Due Date"}>
            <TableCell align="left">{"Heartworm Due Date"}</TableCell>
            <TableCell align="left">{dogInfo.heartwormDueDate}</TableCell>
          </TableRow>
          <TableRow key={"Flea/Tick Due Date"}>
            <TableCell align="left">{"Flea/Tick Due Date"}</TableCell>
            <TableCell align="left">{dogInfo.fleaTickDueDate}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DogInfo;
