import 'date-fns';
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

//dispatch from react-redux
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {item: '', date: new Date(), note: ''};
    this.onSubmit = this.onSubmit.bind(this);
    // this.handleDateChange = this.handleDateChange.bind(this);
  } 
  
  onSubmit(e) {
    e.preventDefault();
    let { item, date, note } = this.state;
    console.log(date);
    this.props.addTodo(item, date, note);
    this.setState({
      item: '',
      note: '',
      date: new Date(),
      open: false,
    })
  }

  render(){  
    // const {addTodo} = this.props;
    let {item, date, note, open} = this.state;

    // console.log('date: ',this.state.date);

    const handleClickOpen = () => {
      this.setState({open: true});
    }

    const handleClose = () => {
      this.setState({open: false});
    }

    return (
      <div>
        <Button variant='outlined' color="default" onClick={handleClickOpen} style={{marginBottom: 15, float: 'right'}}>
          New Todo
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{textAlign: 'right'}}>Todo-Thing</DialogTitle>
        <DialogContent>
          <DialogContentText style={{textAlign: 'right'}}>
            <Typography variant="caption" display="block" gutterBottom>
              <i>Please fill in</i>
            </Typography>
          </DialogContentText>
          <form
            onSubmit={this.onSubmit}
          >
            <TextField
              id="outlined-with-placeholder"
              required
              fullWidth
              label="Todo"
              placeholder="Insert Todo"
              onChange={e => this.setState({item: e.target.value})} 
              value={item}
              margin="normal"
              variant="outlined"
              style={{display: 'inline-block'}}
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
              onChange={e => this.setState({date: e})}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              style={{display: 'inline-block'}}
              />
            </MuiPickersUtilsProvider>

            <TextField
              id="outlined-multiline-static"
              label="Details"
              fullWidth
              multiline
              rows="2"
              placeholder="Insert Todo's Details"
              onChange={e => this.setState({note: e.target.value})} 
              value={note}
              margin="normal"
              variant="outlined"
            />

          <DialogActions>
            <Button color="primary" type="submit">
              Add Todo
            </Button>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
          </DialogActions>
          {/*<input ref={node => (input = node)} />*/}
          {/*<button type="submit">Add Todo</button>*/}
          </form>
        </DialogContent>
      </Dialog>

      </div>
  )}
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (item, date, note) => dispatch(addTodo(item, date, note)),
  };
}

export default connect(null,mapDispatchToProps)(AddTodo)