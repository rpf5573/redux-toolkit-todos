import { combineReducers } from 'redux'
import todosReducer from '../features/todos/todosSlice';
import visibilityFilterReducer from '../features/filters/filterSlice';
import counterReducer from '../features/counter/counterSlice';

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  count: counterReducer
});