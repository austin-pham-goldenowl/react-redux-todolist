import "date-fns";
import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import AddTodo from "../components/AddTodo"

//dispatch from react-redux
class AddTodoCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: "", date: new Date(), note: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    // this.handleDateChange = this.handleDateChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let { item, date, note } = this.state;
    console.log(date);
    this.props.addTodo(item, date, note);
    this.setState({
      item: "",
      note: "",
      date: new Date(),
      open: false
    });
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleItemChange(e) {
    this.setState({ item: e.target.value });
  }

  handleNoteChange(e) {
    this.setState({ note: e.target.value });
  }

  handleDateChange(e) {
    this.setState({ date: e });
  }

  render() {
    return <AddTodo
    open={this.state.open}
    item={this.state.item}
    date={this.state.date}
    note={this.state.note}
    handleClickOpen={this.handleClickOpen}
    handleClose={this.handleClose}
    handleItemChange={this.handleItemChange}
    handleDateChange={this.handleDateChange}
    handleNoteChange={this.handleNoteChange}
    onSubmit={this.onSubmit}
    />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (item, date, note) => dispatch(addTodo(item, date, note))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodoCont);
