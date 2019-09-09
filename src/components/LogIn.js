import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
// import PropTypes from 'prop-types'
import App from './App'
// import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

// const useStyles = makeStyles(theme => ({
//   '@global': {
//     body: {
//       backgroundColor: theme.palette.common.white,
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const classes = useStyles();

class LogIn extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }  

  render() {
    let {userName, password} = this.state;
    let {isLoginSuccess, loginError, logout} = this.props;

    console.log(isLoginSuccess);
    if  (!isLoginSuccess) {
      return ( 
      <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
              <center style={{marginTop: 20}}>
                <Avatar>
                  <LockOutlinedIcon />
                </Avatar>
              </center>
              
                <Typography component="h1" variant="h5" style={{marginTop: 10}}>
                  <center> Knock Knock!</center>
                </Typography>
                <form onSubmit={this.onSubmit}>
                  <TextField
                    variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="userName"
                        label="Username"
                        name="userName"
                        autoComplete="username"
                        onChange={e => this.setState({userName: e.target.value})} 
                        value={userName}
                        autoFocus
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => this.setState({password: e.target.value})} 
                        value={password}
                      />
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        
                      >
                        Sign In
                      </Button>
                    </form>
                  </div>
          
                  <div className="message">
                    { loginError && <SnackbarContent
                      aria-describedby="client-snackbar"
                      style={{marginTop: 5}}
                      message={
                        <span id="client-snackbar">
                        {loginError.message}
                        </span>
                      }/>
                    }
                  </div>
                </Container>
        )} else {
        return (
          <div>
          <div style={{textAlign:'right', marginRight: 10, marginBottom: 5}}> Hi An <button onClick={logout}>Logout</button></div>
          <App/>
          </div>)
      }
    }

  onSubmit(e) {
    e.preventDefault();
    let { userName, password } = this.state;
    this.props.login(userName, password);
    this.setState({
      userName: '',
      password: ''
    })  
  }
}

export default LogIn;