import React from "react";
import PropTypes from "prop-types";
//MUI
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ItemDialog from "./common/ItemDialog";

//                  onClick passed down from TodoList
const TodoItem = ({
  formattedDate,
  newItem,
  item,
  newDate,
  newNote,
  note,
  completed,
  deleted,
  open,
  onItemClick,
  handleClickOpen,
  handleClose,
  onDeleteClick,
  handleItemChange,
  handleDateChange,
  handleNoteChange,
  updateClick
}) => (
  <div>
    <Grid xs={12}>
      <Badge
        badgeContent={formattedDate}
        color={completed ? "primary" : "secondary"}
        style={{ display: deleted ? "none" : "inline-block" }}
      >
        <ExpansionPanel
          style={{ display: deleted ? "none" : "inline-block", width: 320 }}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panelbh-content"
            id="panelbh-header"
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            <Typography>{item}</Typography>
          </ExpansionPanelSummary>
          <Divider />

          <ExpansionPanelDetails
            style={{
              display: !note ? "none" : "block",
              textAlign: "left",
              backgroundColor: "#E5E5E5"
            }}
          >
            <Typography noWrap={true}>{note}</Typography>
          </ExpansionPanelDetails>
          <Divider />
          <div style={{ float: "right" }}>
            <Button
              color={!completed ? "primary" : "default"}
              onClick={onItemClick}
            >
              {!completed ? "complete" : "incomplete"}
            </Button>
            
            <Button
              disabled={!completed ? false : true}
              color="primary"
              onClick={handleClickOpen}
            >
              Edit
            </Button>
            
            <Button color="secondary" onClick={onDeleteClick}>
              Delete
            </Button>

            <ItemDialog
              feature="Update Todo"
              open={open}
              item={newItem}
              date={newDate}
              note={newNote}
              handleClose={handleClose}
              handleItemChange={handleItemChange}
              handleDateChange={handleDateChange}
              handleNoteChange={handleNoteChange}
              submitClick={updateClick}
            />
          </div>
        </ExpansionPanel>
      </Badge>
    </Grid>
  </div>
);

export default TodoItem;
