const initialState = {
  isLoginSuccess: false,
  loginError: null
};

const logIn = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isLoginSuccess: action.isLoginSuccess };

    case "LOGOUT_SUCCESS":
      return { ...state, isLoginSuccess: false };

    case "LOGIN_ERROR":
      return { ...state, loginError: action.loginError };

    default:
      return state;
  }
};

export default logIn;
