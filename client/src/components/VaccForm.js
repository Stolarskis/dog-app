import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import VaccDateDialog from "./VaccDateDialog";
import Button from "@material-ui/core/Button";

export default function VaccForm({ dogInfo, handleSubmit }) {
  console.log(dogInfo);
  const [dhppDappDueDate, setDhppDappDueDate] = React.useState(
    dogInfo["dhppDappDueDate"] || null
  );

  const [rabiesDueDate, setRabiesDueDate] = React.useState(
    dogInfo["rabiesDueDate"] || null
  );

  const [bordetellaDueDate, setBordetellaDueDate] = React.useState(
    dogInfo["bordetellaDueDate"] || null
  );

  const handleDhppDappDateChange = (date) => {
    setDhppDappDueDate(date);
  };
  const handleRabiesDateChange = (date) => {
    setRabiesDueDate(date);
  };
  const handleBordetellaDateChange = (date) => {
    setBordetellaDueDate(date);
  };

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
