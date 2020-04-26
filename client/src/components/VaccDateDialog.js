import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const VaccDateDialog = ({ dialogProps, dueDate, handleDueDateChange }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        margin="normal"
        variant="inline"
        id={dialogProps.id}
        label={dialogProps.label}
        format="MM/dd/yyyy"
        placeholder="mm/dd/yyyy"
        value={dueDate}
        onChange={handleDueDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default VaccDateDialog;
