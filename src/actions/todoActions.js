import * as types from './actionTypes';

export default {
  setTodoText: (text) => {
    return (dispatch, getState) => {
      dispatch({ type: types.SET_TODO_TEXT, text });
    }
  }
}