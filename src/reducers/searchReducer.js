import {
  BEERS_FETCH,
  CLEAR_BEERS_CACHE,
  PAGE_CHANGE,
  PAGE_RESET,
  SORT_CHANGE,
  FAVORITES_FETCH,
} from '../constants/actionTypes';
import * as sortTypes from '../constants/sortTypes';

const INITIAL_STATE = {
  data: null,
  page: 1,
  sortType: sortTypes.DEFAULT,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEERS_FETCH:
      return { ...state, data: action.data };
    case CLEAR_BEERS_CACHE:
      return { ...state, data: null };
    case PAGE_CHANGE:
      return { ...state, page: state.page + action.amount };
    case PAGE_RESET:
      return { ...state, page: 1 };
    case SORT_CHANGE:
      return { ...state, sortType: action.sortType };
    case FAVORITES_FETCH:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
