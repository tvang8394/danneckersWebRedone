import * as types from "../types";

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_OBJ:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};