import { connect } from 'react-redux'
import { login, logout } from "../actions/logIn"
import LogIn from "../components/LogIn"

const mapStateToProps = (state) => {
  return {
    isLoginSuccess: state.logIn.isLoginSuccess,
    loginError: state.logIn.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userName, password) => dispatch(login(userName, password)),
    logout: () => dispatch(logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);