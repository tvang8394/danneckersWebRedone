import * as types from "../types";

export const addItem = (item) => async (dispatch) => {
  dispatch({
    type: types.ADD_ITEM,
    payload: item,
  });
};


export const deleteItem = (item) => (dispatch) => {
  dispatch({
    type: types.DELETE_ITEM,
    payload: item
  })
}

export const updateItem = (item) => (dispatch) => {
  dispatch({
    type: types.UPDATE_ITEM,
    payload: item
  })
}
