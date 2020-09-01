import * as types from '../constants/actionTypes'

export const showModal = data => {
  return { type: types.MODAL_SHOW, data }
}

export const hideModal = () => {
  return { type: types.MODAL_HIDE }
}

export const showError = msg => {
  return { type: types.ERROR_SHOW, msg }
}

export const hideError = () => {
  return { type: types.ERROR_HIDE }
}
