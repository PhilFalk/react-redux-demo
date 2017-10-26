import * as types from '../actions/actionTypes';
import defaultState from './defaultState';

export default function todoReducer(state = defaultState.todo, action) {
  switch (action.type) {
    case types.SET_TODO_TEXT:  
      return {...state, text: action.text};
    default:
      return state;
  }
}