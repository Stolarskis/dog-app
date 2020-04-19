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
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          <TableRow key={"Fixed"}>
            <TableCell align="left">{"Fixed"}</TableCell>
            <TableCell align="left">{dogInfo.fixed ? "Yes" : "No"}</TableCell>
          </TableRow>
          <TableRow key={"Weight"}>
            <TableCell align="left">{"Weight"}</TableCell>
            <TableCell align="left">{dogInfo.weight || "N/A"}</TableCell>
          </TableRow>
          <TableRow key={"Age"}>
            <TableCell align="left">{"Age"}</TableCell>
            <TableCell align="left">{dogInfo.ageYears || "N/A"}</TableCell>
          </TableRow>
          <TableRow key={"Rabies Due Date"}>
            <TableCell align="left">{"DHPP/DAPP Due Date"}</TableCell>
            <TableCell align="left">
              {dogInfo.dhppDappDueDate || "N/A"}
            </TableCell>
          </TableRow>
          <TableRow key={"Heartworm Due Date"}>
            <TableCell align="left">{"Rabies Due Date"}</TableCell>
            <TableCell align="left">{dogInfo.rabiesDueDate || "N/A"}</TableCell>
          </TableRow>
          <TableRow key={"Flea/Tick Due Date"}>
            <TableCell align="left">{"Bordetella Due Date"}</TableCell>
            <TableCell align="left">
              {dogInfo.bordetellaDueDate || "N/A"}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DogInfo;
