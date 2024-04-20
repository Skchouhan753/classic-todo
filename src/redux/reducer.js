//Complete the reducer function logic inside the curly braces {}
// const reducer = () => {};

// export { reducer };
import { ADD } from "./actionTypes.js";
import { REDUCE } from "./actionTypes.js";

// Initial State
const initialState = {
  count: 10,
};

// Reducer Function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { count: state.count + action.payload };
    case REDUCE:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

export default reducer;




