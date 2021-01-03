import * as types from "../types";

export const createOrder = (order) => async (dispatch) => {
  dispatch({
    type: types.ORDER,
    payload: order,
  });
};

