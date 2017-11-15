/*
All React apps have a global store that is a single source of truth for
all data in the application.

This file contains the entire global store defined by a json object. 

All default values of the app are defined and initialized here.
*/
export default {
  todo: {
    text: '',
    listItems: [],
  }
}