import * as filterTypes from "../constants/filterConstants";


export const filterReducer = (state = { option:'home' }, action) => {
  switch (action.type) {
    case filterTypes.ADD_TO_OPTION:
        return {
            option : action.payload 
        }

    default:
      return state;
  }
};