import * as types from '../constants/actionTypes';

export const dummyAction = () => async dispatch => {
  dispatch({ type: types.DUMMY_ACTION });
};
