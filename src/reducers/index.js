import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import todoReducer from './todoReducer';

/*
When you add a reducer to your react application, 
you will then have add a reference to the reducer here to define the state property 
that will contain the reducer output.

This will register the reducer so that it is available for listening to actions. 

The reducer function then returns the new state as an object.

So 'todo' is property on the global store (state object) that will contain the todoReducer 
function output.
*/
export const reducers = combineReducers({
  routing: routerReducer,
  todo: todoReducer,
});
