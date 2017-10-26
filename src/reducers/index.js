import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import todoReducer from './todoReducer';

export const reducers = combineReducers({
  routing: routerReducer,
  todo: todoReducer,
});
