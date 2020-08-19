import axios from 'axios';

import store from '../store';
import { showError } from '../actions';

const instance = axios.create({
  baseURL: 'https://api.punkapi.com/v2',
});

instance.interceptors.request.use(
  config => config,
  error => {
    store.dispatch(showError('Sorry, an error has accord! please try again later.'));
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => response,
  error => {
    store.dispatch(showError('Sorry, an error has accord! please try again later.'));
    return Promise.reject(error);
  }
);

export default instance;
