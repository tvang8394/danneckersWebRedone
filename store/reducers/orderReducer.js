import * as types from "../types";

const initialState = {
  order: {},
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORDER:
      return {
        order: action.payload,
      };
    default:
      return state;
  }
};