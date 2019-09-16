import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import "typeface-roboto";

const LoginForm = ({ userName, password, loginError, handleUserNameChange, handlePasswordChange, onSubmit }) => (
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div>
      <center style={{ marginTop: 20 }}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
      </center>

      <Typography component="h1" variant="h5" style={{ marginTop: 10 }}>
        <center> Knock Knock!</center>
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="userName"
          label="Username"
          name="userName"
          autoComplete="username"
          onChange={handleUserNameChange}
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
          onChange={handlePasswordChange}
          value={password}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign In
        </Button>
      </form>
    </div>

    <div className="message">
      {loginError && (
        <SnackbarContent
          aria-describedby="client-snackbar"
          style={{ marginTop: 5 }}
          message={<span id="client-snackbar">{loginError.message}</span>}
        />
      )}
    </div>
  </Container>
);

export default LoginForm;
