import { connect } from "react-redux";
import { login, logout } from "../actions/logIn";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import App from "../components/App"

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let { userName, password } = this.state;
    this.props.login(userName, password);
    this.setState({
      userName: "",
      password: ""
    });
  }

  handleUserNameChange = e => this.setState({ userName: e.target.value })
  handlePasswordChange = e => this.setState({ password: e.target.value })

  render() {
    // let { userName, password } = this.state;
    let { isLoginSuccess } = this.props;

    // console.log(isLoginSuccess);

    // console.log(isLoginSuccess);
    // if (!isLoginSuccess) {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() =>
            !isLoginSuccess ? (
              <LoginForm
                userName={this.state.userName}
                password={this.state.password}
                loginError={this.props.loginError}
                handleUserNameChange={this.handleUserNameChange}
                handlePasswordChange={this.handlePasswordChange}
                onSubmit={this.onSubmit}
              />
            ) : (
              <Redirect to="/app" />
            )
          }
        />
        {/* 
        <Route path="/login" render={() => {

        }}/> */}

        <Route
          path="/app"
          render={() =>
            !isLoginSuccess ? (
              <Redirect to="/" />
            ) : (
              <App logout={this.props.logout} />
            )
          }
        />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginSuccess: state.logIn.isLoginSuccess,
    loginError: state.logIn.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (userName, password) => dispatch(login(userName, password)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
