

//use this variable to create the redux store.
//the initial data of the redux store should be {counter: 10}
// const store = {};

// export { store };


import reducer from "./reducer";

import { combineReducers, createStore } from "redux";


// const rootReducer = combineReducers({
//      counter:reducer
// }) 
export const store = createStore(reducer);



