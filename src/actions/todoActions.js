import * as types from './actionTypes';

export default {
  setTodoText: (text) => {
    return (dispatch, getState) => {
      dispatch({ type: types.SET_TODO_TEXT, text });
    }
  },

  addTodoItem: () => {
    return (dispatch, getState) => {
      const text = getState().todo.text;
      dispatch({ type: types.ADD_TODO_ITEM, text });
      dispatch({ type: types.SET_TODO_TEXT, text: '' });
    }
  }
}