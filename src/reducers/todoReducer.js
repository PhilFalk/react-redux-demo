import * as types from '../actions/actionTypes';
import defaultState from './defaultState';

/*
This is a reducer function which is a pure function. 

A pure function doesn’t depend on and doesn’t modify the states of variables out of its scope.
A pure function always returns the same result given same parameters. 
Its execution doesn’t depend on the state of the system.

http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/

A single reducer can be created for a group of related actions.

When an action is dispatched the reducer will handle the action.

It is the job of the reducer to take a single action with data and transform or 'reduce'
the data to a new object that represents a state change in the application.

*/

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