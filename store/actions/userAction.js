import * as types from "../types";

export const userSignIn = (user) => async (dispatch) => {
  dispatch({
    type: types.USER_OBJ,
    payload: user,
  });
};

