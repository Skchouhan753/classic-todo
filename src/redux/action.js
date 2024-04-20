//DO NOT change the function names
import { ADD } from "./actionTypes.js";
import { REDUCE } from "./actionTypes.js";
//function to return the add action object


const handleAddActionObj = (val) => {
  return {
    type:ADD,
    payload:val
  };
};

//function to return the reduce action object
const handleReduceActionObj = (val) => {
  return {
    type:REDUCE,
    payload:val
  };
};

export { handleAddActionObj, handleReduceActionObj };



