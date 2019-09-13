export function setLoginSuccess(isLoginSuccess) {
  return {
    type: "LOGIN_SUCCESS",
    isLoginSuccess
  };
}

export function logout() {
  return {
    type: "LOGOUT_SUCCESS"
  };
}

export function setLoginError(loginError) {
  return {
    type: "LOGIN_ERROR",
    loginError
  };
}

export function login(userName, password) {
  return dispatch => {
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginAPI(userName, password, error => {
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });

    // promiseCallAPILogin(username, password).then().catch(err)
  };
}

function callLoginAPI(userName, password, callback) {
  setTimeout(() => {
    if (userName === "ptan" && password === "123456") {
      return callback(null);
    } else {
      return callback(new Error("Invalid email and password"));
    }
  }, 1000);
}

// function promiseCallAPILogin(username, passsword) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     if (userName === 'ptan' && password === '123456') {
//       return resolve(null);
//     } else {
//       return reject(new Error('Invalid email and password'));
//     }
//   }, 1000);
//   })
// }
