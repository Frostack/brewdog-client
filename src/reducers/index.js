import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import modalReducer from './modalReducer';
import storageReducer from './storageReducer';

export default combineReducers({
  search: searchReducer,
  modal: modalReducer,
  storage: storageReducer,
});
