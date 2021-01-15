import * as types from "../types";

export const userSignIn = (user) => async (dispatch) => {
  console.log(user)
  
  dispatch({
    type: types.USER_OBJ,
    payload: user,
  });
};

