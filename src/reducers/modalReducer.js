import { MODAL_SHOW, MODAL_HIDE, ERROR_SHOW, ERROR_HIDE } from '../constants/actionTypes'

const INITIAL_STATE = {
  show: false,
  data: [],
  error: {
    show: false,
    msg: '',
  },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return { ...state, show: true, data: action.data }
    case MODAL_HIDE:
      return { ...state, show: false }
    case ERROR_SHOW:
      return { ...state, error: { show: true, msg: action.msg } }
    case ERROR_HIDE:
      return { ...state, error: { show: false, msg: '' } }
    default:
      return state
  }
}
