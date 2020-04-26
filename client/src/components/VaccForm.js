import "date-fns";
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import VaccDateDialog from "./VaccDateDialog";
import Button from "@material-ui/core/Button";

export default function VaccForm({ handleSubmit, dogId }) {
  const [dhppDappDueDate, setDhppDappDueDate] = React.useState(null);

  const [rabiesDueDate, setRabiesDueDate] = React.useState(null);

  const [bordetellaDueDate, setBordetellaDueDate] = React.useState(null);

  const handleDhppDappDateChange = (date) => {
    setDhppDappDueDate(date);
  };
  const handleRabiesDateChange = (date) => {
    setRabiesDueDate(date);
  };
  const handleBordetellaDateChange = (date) => {
    setBordetellaDueDate(date);
  };

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        `http://localhost:9000/dog/${dogId}/vaccRecord`,
        {
          mode: "cors",
        }
      );

      const vaccRecord = await result.json();
      //Api doesn't return a body when returns 404.
      if (!vaccRecord.body) {
        return;
      } else {
        if (dhppDappDueDate == null) {
          setDhppDappDueDate(vaccRecord.body["dhppDappDueDate"]);
        }
        if (rabiesDueDate == null) {
          setRabiesDueDate(vaccRecord.body["rabiesDueDate"]);
        }
        if (bordetellaDueDate == null) {
          setBordetellaDueDate(vaccRecord.body["bordetellaDueDate"]);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Grid container justify="space-evenly" direction={"row"}>
        <Grid id="top-row" container>
          <Grid item xs={4}>
            <VaccDateDialog
              dialogProps={{
                id: "DhppDapp-Due-Date-Date-Picker",
                label: "Dhpp/Dapp Vaccine Due Date",
              }}
              dueDate={dhppDappDueDate}
              handleDueDateChange={handleDhppDappDateChange}
            />
          </Grid>
        </Grid>
        <Grid id="middle-row" container>
          <Grid item>
            <VaccDateDialog
              dialogProps={{
                id: "Rabies-Due-Date-Date-Picker",
                label: "Rabies Vaccine Due Date",
              }}
              dueDate={rabiesDueDate}
              handleDueDateChange={handleRabiesDateChange}
            />
          </Grid>
        </Grid>
        <Grid id="Bottom-Row" container>
          <Grid item>
            <VaccDateDialog
              dialogProps={{
                id: "Bordetella-Due-Date-Date-Picker",
                label: "Bordetella Vaccine Due Date",
              }}
              dueDate={bordetellaDueDate}
              handleDueDateChange={handleBordetellaDateChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleSubmit({
            dhppDappDueDate: dhppDappDueDate,
            rabiesDueDate: rabiesDueDate,
            bordetellaDueDate: bordetellaDueDate,
          });
        }}
      >
        Submit
      </Button>
    </div>
  );
}
