import { createAction } from '@reduxjs/toolkit'

let nextTodoId = 0
export const addTodo = createAction('ADD_TODO', text => {
  return {
    payload: { id: nextTodoId++, text }
  }
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
