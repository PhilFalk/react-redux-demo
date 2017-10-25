import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import Todo from "./view/todo";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={Todo} />
  </Router>
);

// export
export { router };
