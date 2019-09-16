import React from "react";
//MUI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ItemDialog = ({
  feature,
  open,
  item,
  date,
  note,
  handleClose,
  handleItemChange,
  handleDateChange,
  handleNoteChange,
  submitClick
}) => (
  <div>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" style={{ textAlign: "right" }}>
        Todo-Thing
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ textAlign: "right" }}>
          <Typography variant="caption" display="block" gutterBottom>
            <i>Please fill in</i>
          </Typography>
        </DialogContentText>
        <form onSubmit={submitClick}>
          <TextField
            id="outlined-with-placeholder"
            required
            fullWidth
            label="Todo"
            placeholder="Insert Todo"
            onChange={handleItemChange}
            value={item}
            margin="normal"
            variant="outlined"
            style={{ display: "inline-block" }}
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              margin="normal"
              required
              fullWidth
              id="date-picker-dialog"
              label="Date Picker"
              format="dd/MM/yyyy"
              value={date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
              style={{ display: "inline-block" }}
            />
          </MuiPickersUtilsProvider>

          <TextField
            id="outlined-multiline-static"
            label="Details"
            fullWidth
            multiline
            rows="2"
            placeholder="Insert Todo's Details"
            onChange={handleNoteChange}
            value={note}
            margin="normal"
            variant="outlined"
          />

          <DialogActions>
            <Button color="primary" type="submit">
              {feature}
            </Button>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  </div>
);

export default ItemDialog;
