import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './reducers'
// import App from './components/App'
import { store } from "./store"
import LogIn from './containers/LogIn'
// const store = createStore(rootReducer)
// import Main from './components/App'
// const render = () => {
// 	return(
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 		document.getElementById('root')
// )}

// render();

// store.subscribe(render);


render(
  <Provider store={store}>
    <LogIn />
  </Provider>,
  document.getElementById('root')
)