import * as types from "../types";

export const userSignIn = (user, customerId) => async (dispatch) => {
  const newUser = {
    uuid: user.user.uid,
    displayName: user.user.displayName,
    email: user.user.email,
    customerId: customerId
  }
  dispatch({
    type: types.USER_OBJ,
    payload: newUser,
  });
};


export const userSignOut = (user) => async (dispatch) => {
  dispatch({
    type: types.USER_SIGNOUT,
    payload: user
  })
}
