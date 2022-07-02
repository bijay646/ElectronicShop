import * as filterTypes from "../constants/filterConstants";

export const setDisplay = (choice) => async (dispatch) => {
  // console.log(choice);
  dispatch({
    type: filterTypes.ADD_TO_OPTION,
    payload: choice
  });
};
