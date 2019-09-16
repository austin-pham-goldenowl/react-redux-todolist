import "date-fns";
import React from "react";
import Button from "@material-ui/core/Button";
import ItemDialog from "./common/ItemDialog";

//dispatch from react-redux
const AddTodo = ({
  open,
  item,
  date,
  note,
  handleClickOpen,
  handleItemChange,
  handleDateChange,
  handleNoteChange,
  handleClose,
  onSubmit
}) => (
  <div>
    <Button
      variant="outlined"
      color="default"
      onClick={handleClickOpen}
      style={{ marginBottom: 15, float: "right" }}
    >
      New Todo
    </Button>
    <ItemDialog
      feature="Add Todo"
      open={open}
      item={item}
      date={date}
      note={note}
      handleClose={handleClose}
      handleItemChange={handleItemChange}
      handleDateChange={handleDateChange}
      handleNoteChange={handleNoteChange}
      submitClick={onSubmit}
    />
  </div>
);

export default AddTodo;
