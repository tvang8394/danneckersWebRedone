import * as types from "../types";

const initialState = {
  cart: [],
};

export const addItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        cart: [...state.cart, action.payload],
      };
    case types.DELETE_ITEM:
      return {
        ...state,
        cart: [...state.cart.filter((m) => m.id !== action.payload)],
      };
    case types.UPDATE_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (action.payload.id === item.id) {
            return action.payload;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
