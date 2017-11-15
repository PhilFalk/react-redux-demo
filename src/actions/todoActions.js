import * as types from './actionTypes';

/*

Actions are used to defined the payload of data that will be sent to the store using dispatch.

Redux actions can either return a json object or a function.

If your action returns a function then it is using redux thunk middleware.
https://github.com/gaearon/redux-thunk

A thunk is a function that wraps an expression to delay its evaluation (i.e Promise)

It can be used to asynchronously call a REST endpoint and then dispatch data based
on the data returned from the endpoint.

*/

export default {

  /*
  This action just returns a simple payload of data 
  */
  setTodoText: text => ({ type: types.SET_TODO_TEXT, text }),

  /*
  This action returns a function that will delay the execution of dispatch
  */
  addTodoItem: () => (dispatch, getState) => {
    const text = getState().todo.text;
    dispatch({ type: types.ADD_TODO_ITEM, text });
    dispatch({ type: types.SET_TODO_TEXT, text: '' });
  },

  setItemDone: (itemIndex) => ({ type: types.SET_ITEM_DONE, itemIndex }),

}