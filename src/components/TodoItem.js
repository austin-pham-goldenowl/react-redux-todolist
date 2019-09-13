import React from "react";
import PropTypes from "prop-types";
//MUI
// import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
// import { sizing } from '@material-ui/system';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEraser } from '@fortawesome/free-solid-svg-icons'
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

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
// import Typography from '@material-ui/core/Typography';

//                  onClick passed down from TodoList
class TodoItem extends React.Component {
  // const classes = useStyles();
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      open: false,
      newItem: this.props.item,
      newNote: this.props.note,
      newDate: this.props.date
    };
    // this.onSubmit = this.onSubmit.bind(this);
    this.updateClick = this.updateClick.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    // this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  updateClick(e) {
    e.preventDefault();
    // console.log(this.state.newDate)
    this.props.onUpdateClick(
      this.state.newItem,
      this.state.newDate,
      this.state.newNote
    );
    this.setState({ open: false });
    // console.log('test' , this.props.id ,this.state.newItem, this.state.newDate, this.state.newNote)
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   // let { id, newItem, newDate, newNote } = this.state;
  //   console.log(id);
  //   // this.props.addTodo(item, date, note);
  //   // this.setState({
  //   //   item: '',
  //   //   note: '',
  //   //   date: new Date(),
  //   //   open: false,
  //   // })
  // }

  // this.setState({newItem: item, newNote: note})
  render() {
    let {
      onItemClick,
      onDeleteClick,
      completed,
      deleted,
      item,
      formattedDate,
      note
    } = this.props;
    let { expanded, open, newItem, newNote, newDate } = this.state;

    const handleChange = panel => (event, isExpanded) => {
      isExpanded
        ? this.setState({ expanded: panel })
        : this.setState({ expanded: false });
    };

    // console.log(item, date, note)

    return (
      <div>
        <Grid xs={12}>
          <Badge
            badgeContent={formattedDate}
            color={completed ? "primary" : "secondary"}
            style={{ display: deleted ? "none" : "inline-block" }}
          >
            <ExpansionPanel
              expanded={expanded === "panel"}
              onChange={handleChange("panel")}
              square={false}
              rounded
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
                  onClick={this.handleClickOpen}
                >
                  Edit
                </Button>

                <Dialog
                  open={open}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle
                    id="form-dialog-title"
                    style={{ textAlign: "right" }}
                  >
                    Todo-Thing
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText style={{ textAlign: "right" }}>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        <i>Please fill in</i>
                      </Typography>
                    </DialogContentText>
                    <form onSubmit={this.updateClick}>
                      <TextField
                        id="outlined-with-placeholder"
                        required
                        fullWidth
                        label="Todo"
                        placeholder="Insert Todo"
                        onChange={e => {
                          this.setState({ newItem: e.target.value });
                        }}
                        value={newItem}
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
                          value={newDate}
                          onChange={e => this.setState({ newDate: e })}
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
                        onChange={e =>
                          this.setState({ newNote: e.target.value })
                        }
                        value={newNote}
                        margin="normal"
                        variant="outlined"
                      />

                      <DialogActions>
                        <Button color="primary" type="submit">
                          Update Todo
                        </Button>
                        <Button onClick={this.handleClose} color="secondary">
                          Cancel
                        </Button>
                      </DialogActions>
                      {/*<input ref={node => (input = node)} />*/}
                      {/*<button type="submit">Add Todo</button>*/}
                    </form>
                  </DialogContent>
                </Dialog>

                <Button color="secondary" onClick={onDeleteClick}>
                  Delete
                </Button>
              </div>
            </ExpansionPanel>
          </Badge>
        </Grid>

        {/*		      <FontAwesomeIcon 
		    	icon={faEraser} 
		    	border
		    	onClick={onDeleteClick} 
		   		style={{
		   			display: 'flex',
		   			alignItems: 'center',
		   			marginLeft: 20,
		     		display: deleted ? 'none' : 'inline'}}
		     />*/}
      </div>
    );
  }
}

TodoItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  formattedDate: PropTypes.string.isRequired,
  note: PropTypes.string
};

export default TodoItem;
