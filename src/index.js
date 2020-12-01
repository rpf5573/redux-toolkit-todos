import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { addTodo } from './actions/index'

const store = configureStore({
  reducer: rootReducer
});

const myAction = addTodo('빵먹기');
console.log(myAction);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)