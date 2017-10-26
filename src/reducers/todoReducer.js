import * as types from '../actions/actionTypes';
import defaultState from './defaultState';

export default function todoReducer(state = defaultState.todo, action) {
  switch (action.type) {
    case types.SET_TODO_TEXT:
      return {...state, text: action.text};
    case types.ADD_TODO_ITEM:
      return {...state,
        listItems: [...state.listItems, {itemText: action.text, isDone: false}]};
    default:
      return state;
  }
}