import * as types from '../actions/actionTypes';
import defaultState from './defaultState';

export default function todoReducer(state = defaultState.todo, action) {
  switch (action.type) {
    case types.SET_TODO_TEXT:
      return {...state, text: action.text};
    case types.ADD_TODO_ITEM:
      return {...state,
        listItems: [...state.listItems, {itemText: action.text, isDone: false}]};
    case types.SET_ITEM_DONE:
      const item = state.listItems[action.itemIndex];
      const newItem = {...item, isDone: !item.isDone};
      const newList = state.listItems.slice();
      newList[action.itemIndex] = newItem;
      return {...state, listItems: newList};
    default:
      return state;
  }
}