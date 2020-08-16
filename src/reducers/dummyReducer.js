import { DUMMY_ACTION } from '../constants/actionTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DUMMY_ACTION:
      return { ...state };
    default:
      return state;
  }
};
