import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../components/TodoItem"

//                  onClick passed down from TodoList
class TodoItemCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      newItem: this.props.item,
      newNote: this.props.note,
      newDate: this.props.date
    };
    // this.onSubmit = this.onSubmit.bind(this);
    this.updateClick = this.updateClick.bind(this);

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    // this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleClickOpen() {
    // console.log("hey");
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

  handleItemChange(e) {
    this.setState({ newItem: e.target.value });
  }

  handleNoteChange(e) {
    this.setState({ newNote: e.target.value });
  }

  handleDateChange(e) {
    this.setState({ newDate: e });
  }

  render() {
    const {
      item,
      note,
      onItemClick,
      onDeleteClick,
      completed,
      deleted,
      formattedDate,
    } = this.props;

    const {newItem, newDate, newNote, open } = this.state;

    // const handlePanel = handleChange("panel");
    return (
      <TodoItem
        formattedDate={formattedDate}
        newItem={newItem}
        item={item}
        newDate={newDate}
        newNote={newNote}
        note={note}
        completed={completed}
        deleted={deleted}
        open={open}
        onItemClick={onItemClick}
        handleClickOpen={this.handleClickOpen}
        handleClose={this.handleClose}
        onDeleteClick={onDeleteClick}
        handleItemChange={this.handleItemChange}
        handleDateChange={this.handleDateChange}
        handleNoteChange={this.handleNoteChange}
        updateClick={this.updateClick}
      />
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

export default TodoItemCont;
