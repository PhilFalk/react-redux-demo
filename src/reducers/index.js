import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import todoReducer from './todoReducer';

/*
When you add a more reducers to your react application, 
you will then have add a reference to the reducers here to defined the state property 
that will contain the reducer output.

This will register the reducer so that it is available for listening to actions. 

The reducer function then returns the new state object to the specified property key.

So 'todo' is property key on the global store (referenced through this.state) 
that will contain the todoReducer function output.
*/
export const reducers = combineReducers({
  routing: routerReducer,
  todo: todoReducer,
});
